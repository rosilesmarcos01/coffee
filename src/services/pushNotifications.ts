import { getToken, onMessage } from 'firebase/messaging';
import { doc, updateDoc } from 'firebase/firestore';
import { messaging, db } from '../config/firebase';

/**
 * Request notification permission from the user and get FCM token
 * @param userId - The user's Firebase Auth UID
 * @returns The FCM token if granted, null otherwise
 */
export async function requestNotificationPermission(userId: string): Promise<string | null> {
  try {
    // Check if messaging is supported
    if (!messaging) {
      console.log('Firebase Messaging is not supported in this browser');
      return null;
    }

    // Check if notifications are supported
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return null;
    }

    // Request permission
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted');
      
      // Get FCM token
      // VAPID key from Firebase Console: Project Settings > Cloud Messaging > Web Push certificates
      const token = await getToken(messaging, {
        vapidKey: 'BJzNTRl_0-0-C7cssgbphWdL0CIMcRQQOPj0oiSnNyksuUMzIos-cadpxAx-lUukfKkRvbnxwLwHqyzapPQBF7c'
      });

      if (token) {
        console.log('FCM Token obtained:', token);
        
        // Save token to user document in Firestore
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
          fcmToken: token,
          notificationsEnabled: true,
          lastTokenUpdate: new Date()
        }).catch(async (error) => {
          // If user document doesn't exist, create it
          if (error.code === 'not-found') {
            const { setDoc } = await import('firebase/firestore');
            await setDoc(userRef, {
              fcmToken: token,
              notificationsEnabled: true,
              lastTokenUpdate: new Date(),
              createdAt: new Date()
            }, { merge: true });
          } else {
            throw error;
          }
        });

        return token;
      }
    } else if (permission === 'denied') {
      console.log('Notification permission denied');
    } else {
      console.log('Notification permission dismissed');
    }
    
    return null;
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return null;
  }
}

/**
 * Check if notifications are currently enabled
 * @returns true if permission is granted, false otherwise
 */
export function areNotificationsEnabled(): boolean {
  if (!('Notification' in window)) {
    return false;
  }
  return Notification.permission === 'granted';
}

/**
 * Set up listener for foreground notifications
 * @param callback - Function to call when a notification is received
 */
export function setupForegroundNotificationListener(callback: (payload: any) => void) {
  if (!messaging) {
    console.log('Messaging not available');
    return () => {};
  }

  // Listen for messages when the app is in the foreground
  const unsubscribe = onMessage(messaging, (payload) => {
    console.log('Foreground notification received:', payload);
    
    // Show browser notification
    if (payload.notification) {
      const { title, body } = payload.notification;
      
      // Check if we have permission
      if (Notification.permission === 'granted') {
        new Notification(title || 'Coffee Delivery', {
          body: body || 'You have a new notification',
          icon: '/coffee-icon.png',
          badge: '/coffee-icon.png',
          tag: 'coffee-delivery',
          requireInteraction: true,
          data: payload.data
        });
      }
    }
    
    // Call the callback with the full payload
    callback(payload);
  });

  return unsubscribe;
}

/**
 * Disable notifications for a user
 * @param userId - The user's Firebase Auth UID
 */
export async function disableNotifications(userId: string): Promise<void> {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      notificationsEnabled: false,
      fcmToken: null
    });
  } catch (error) {
    console.error('Error disabling notifications:', error);
    throw error;
  }
}

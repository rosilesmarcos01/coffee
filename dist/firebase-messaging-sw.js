// Service Worker for Firebase Cloud Messaging
// This file handles background notifications when the app is not in focus

// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyBB8lfGEwxX18XWyvKn9KNT2Yt6rFVGwIo",
  authDomain: "coffee-delivery-app-b29f8.firebaseapp.com",
  projectId: "coffee-delivery-app-b29f8",
  storageBucket: "coffee-delivery-app-b29f8.firebasestorage.app",
  messagingSenderId: "545597275258",
  appId: "1:545597275258:web:b3eb28b65cc7b534fdcfc3"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  // Customize notification
  const notificationTitle = payload.notification?.title || '☕ Coffee Delivery';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    icon: '/coffee-icon.png',
    badge: '/coffee-icon.png',
    tag: 'coffee-delivery',
    requireInteraction: true,
    vibrate: [200, 100, 200],
    data: payload.data,
    actions: [
      {
        action: 'view',
        title: 'Ver Pedido',
        icon: '/coffee-icon.png'
      },
      {
        action: 'close',
        title: 'Cerrar'
      }
    ]
  };

  // Show notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click received:', event);

  event.notification.close();

  // Handle action buttons
  if (event.action === 'view') {
    // Open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        // Check if there's already a window/tab open
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        // If no window is open, open a new one
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  }
});

// Optional: Handle service worker installation
self.addEventListener('install', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker installing...');
  self.skipWaiting();
});

// Optional: Handle service worker activation
self.addEventListener('activate', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker activating...');
  event.waitUntil(clients.claim());
});

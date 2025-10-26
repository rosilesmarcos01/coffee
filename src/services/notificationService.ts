import { collection, query, where, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Order } from '../types';

/**
 * Subscribe to new orders for admin notifications
 * This will listen for orders with 'pending' status
 * @param callback - Function to call when a new order is detected
 * @returns Unsubscribe function to stop listening
 */
export function subscribeToNewOrders(callback: (order: Order) => void): Unsubscribe {
  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef, where('status', '==', 'pending'));

  return onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const order = {
          id: change.doc.id,
          ...change.doc.data()
        } as Order;
        
        console.log('New order detected:', order);
        callback(order);
      }
    });
  });
}

/**
 * Subscribe to order status changes for a specific user
 * This is useful for the user to get real-time updates on their orders
 * @param userId - The user's Firebase Auth UID
 * @param callback - Function to call when an order status changes
 * @returns Unsubscribe function to stop listening
 */
export function subscribeToUserOrders(userId: string, callback: (order: Order) => void): Unsubscribe {
  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef, where('userId', '==', userId));

  return onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'modified') {
        const order = {
          id: change.doc.id,
          ...change.doc.data()
        } as Order;
        
        console.log('Order updated:', order);
        callback(order);
      }
    });
  });
}

/**
 * Subscribe to delivered orders for a specific user
 * This will trigger when an order status changes to 'delivered'
 * @param userId - The user's Firebase Auth UID
 * @param callback - Function to call when an order is delivered
 * @returns Unsubscribe function to stop listening
 */
export function subscribeToDeliveredOrders(userId: string, callback: (order: Order) => void): Unsubscribe {
  const ordersRef = collection(db, 'orders');
  const q = query(
    ordersRef, 
    where('userId', '==', userId),
    where('status', '==', 'delivered')
  );

  return onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'modified' || change.type === 'added') {
        const order = {
          id: change.doc.id,
          ...change.doc.data()
        } as Order;
        
        console.log('Order delivered:', order);
        callback(order);
      }
    });
  });
}

/**
 * Play a notification sound
 */
export function playNotificationSound() {
  try {
    // Create a simple notification sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (error) {
    console.error('Error playing notification sound:', error);
  }
}

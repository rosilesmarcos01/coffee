import { Timestamp } from 'firebase/firestore';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'food' | 'combo';
  description: string;
  imageUrl?: string;
  available: boolean;
  createdAt: Timestamp;
}

export interface Order {
  id: string;
  userId: string;
  shiftDate: string; // ISO date string (YYYY-MM-DD)
  shiftDay: 'monday' | 'wednesday' | 'saturday';
  orderType: 'surprise' | 'selected';
  selectedItems?: string[]; // MenuItem IDs
  status: 'pending' | 'ordered' | 'delivered' | 'confirmed';
  deliveryTime?: Timestamp;
  confirmedAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface User {
  id: string; // same as auth UID
  name: string;
  email: string;
  fcmToken?: string; // for push notifications
  preferences: {
    defaultOrderType: 'surprise' | 'selected';
    favoriteItems?: string[];
  };
  createdAt: Timestamp;
}

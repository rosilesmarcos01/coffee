import { Timestamp } from 'firebase/firestore';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'food' | 'combo' | 'seasonal' | 'hot-coffee' | 'iced-coffee' | 'cold-brew' | 
            'frappuccino-coffee' | 'frappuccino-cream' | 'refreshers' | 'shaken-espresso' | 
            'hot-tea' | 'iced-tea' | 'coffee-beans';
  description: string;
  imageUrl?: string;
  available: boolean;
  createdAt: Timestamp;
}

export interface Order {
  id: string;
  userId: string;
  shiftDate: string; // ISO date string (YYYY-MM-DD)
  shiftDay: 'sunday' | 'monday' | 'wednesday' | 'saturday';
  orderType: 'surprise' | 'selected';
  selectedItems?: string[]; // MenuItem IDs
  status: 'pending' | 'ordered' | 'delivered' | 'confirmed';
  deliveryTime?: Timestamp;
  confirmedAt?: Timestamp;
  feedback?: string; // User feedback/message after confirmation
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

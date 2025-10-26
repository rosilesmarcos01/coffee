import { Timestamp } from 'firebase/firestore';

export type DrinkSize = 'tall' | 'grande' | 'venti';
export type MilkType = 'whole' | '2%' | 'nonfat' | 'almond' | 'coconut' | 'oat' | 'soy' | 'none';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'food' | 'combo' | 'seasonal' | 'hot-coffee' | 'iced-coffee' | 'cold-brew' | 
            'frappuccino-coffee' | 'frappuccino-cream' | 'refreshers' | 'shaken-espresso' | 
            'hot-tea' | 'iced-tea' | 'coffee-beans';
  description: string;
  imageUrl?: string;
  available: boolean;
  hasSizeOptions?: boolean; // Indicates if this item has size options
  hasMilkOptions?: boolean; // Indicates if this item has milk options
  createdAt: Timestamp;
}

export interface OrderItemSelection {
  itemId: string;
  size?: DrinkSize;
  milkType?: MilkType;
}

export interface Order {
  id: string;
  userId: string;
  shiftDate: string; // ISO date string (YYYY-MM-DD)
  shiftDay: 'sunday' | 'monday' | 'wednesday' | 'saturday';
  orderType: 'surprise' | 'selected';
  selectedItems?: string[]; // MenuItem IDs (legacy support)
  itemSelections?: OrderItemSelection[]; // Detailed selections with size and milk
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

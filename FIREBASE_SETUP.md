# Firebase Setup Instructions

## 1. Firestore Security Rules

Go to Firebase Console > Firestore Database > Rules and set:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Orders collection - only authenticated user can read/write their orders
    match /orders/{orderId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null;
    }
    
    // Menu items - anyone can read
    match /menu/{itemId} {
      allow read: if true;
      allow write: if false; // Only admin/you can write via console
    }
    
    // User preferences
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 2. Enable Authentication

1. Go to Firebase Console > Authentication
2. Click "Get Started"
3. Enable "Email/Password" sign-in method
4. Add user manually:
   - Email: gabriela@coffeemail.com
   - Password: (set a secure password and share with Gabriela)

## 3. Create Firestore Database

1. Go to Firebase Console > Firestore Database
2. Click "Create Database"
3. Start in "production mode"
4. Choose region closest to your location (us-central for Mexico)

## 4. Enable Cloud Messaging (for push notifications - Phase 6)

1. Go to Firebase Console > Project Settings > Cloud Messaging
2. Generate Web Push Certificates (VAPID key)
3. Copy the key pair - you'll need this for notifications later

## 5. Populate Menu Collection

You can add menu items manually in Firebase Console or use the seed script (will be created in Phase 3).

Navigate to Firestore Database > Start Collection > Collection ID: "menu"

Add documents with these fields:
- name (string): "Caffe Latte"
- category (string): "coffee"
- description (string): "Espresso con leche vaporizada"
- available (boolean): true
- createdAt (timestamp): (current time)

Repeat for other menu items from the instructions.

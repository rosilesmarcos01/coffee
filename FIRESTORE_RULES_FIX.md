# Fix Firestore Rules for Admin Access

## Problem
The admin user (rosilesmarcos99@gmail.com) cannot see orders because Firestore rules only allow users to see their own orders.

## Solution
Update your Firestore Security Rules to allow admin access.

## Steps

1. Go to **Firebase Console**: https://console.firebase.google.com/
2. Select your project: **coffee-delivery-app-b29f8**
3. Click **Firestore Database** in the left sidebar
4. Click the **Rules** tab at the top
5. Replace the current rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper function to check if user is admin
    function isAdmin() {
      return request.auth != null && request.auth.token.email == 'rosilesmarcos99@gmail.com';
    }
    
    // Orders collection
    match /orders/{orderId} {
      // Admin can read all orders
      allow read: if isAdmin();
      
      // Users can read their own orders
      allow read: if request.auth != null && request.auth.uid == resource.data.userId;
      
      // Admin can update any order (mark as ordered/delivered)
      allow update: if isAdmin();
      
      // Users can create orders and update their own orders
      allow create: if request.auth != null;
      allow update: if request.auth != null && request.auth.uid == resource.data.userId;
    }
    
    // Menu items - anyone authenticated can read
    match /menu/{itemId} {
      allow read: if request.auth != null;
      allow write: if false; // Only via Firebase Console or Admin SDK
    }
    
    // User preferences
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

6. Click **Publish** button

## What This Does

✅ **Admin user** (rosilesmarcos99@gmail.com) can:
- Read ALL orders
- Update ANY order status
- Mark orders as ordered/delivered

✅ **Regular users** (Gabriela) can:
- Read only their own orders
- Create new orders
- Update their own orders (confirm delivery)

✅ **Menu items**:
- Anyone authenticated can read
- Cannot be modified from app (only via console/admin SDK)

## Test After Publishing

1. Refresh the admin page
2. You should see all orders
3. Try clicking "Todos" to see all orders

## Alternative: Use Custom Claims (More Secure)

If you want a more robust solution, you can set custom claims instead of hardcoding the email. Let me know if you want help with that approach.

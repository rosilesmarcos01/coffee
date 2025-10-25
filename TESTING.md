# 🚀 Quick Testing Guide

## Before You Start
Make sure you've completed Firebase setup (see FIREBASE_SETUP.md):
- ✅ Created Firebase project
- ✅ Enabled Email/Password authentication
- ✅ Created Firestore database
- ✅ Set security rules
- ✅ Created user account for gabriela@coffeemail.com
- ✅ Added menu items to Firestore

## Start the Dev Server

```bash
npm run dev
```

App will be available at: http://localhost:5173

## Test Scenarios

### 1. Login Flow
- Navigate to http://localhost:5173/login
- Enter credentials:
  - Email: gabriela@coffeemail.com
  - Password: (the one you set in Firebase)
- Should redirect to dashboard

### 2. Surprise Order
- On dashboard, find any upcoming shift
- Click "✨ Sorpréndeme" button
- Should see success toast
- Order status should show "⏳ Pendiente"

### 3. Menu Selection
- On dashboard, find another upcoming shift
- Click "📋 Ver Menú" button
- Browse the menu items
- Select 1-3 items (they'll highlight)
- Click "Confirmar Pedido" at bottom
- Should redirect back to dashboard
- Order should appear as pending

### 4. Check Firestore Data
Go to Firebase Console > Firestore Database:
- Collection: `orders`
- Should see documents with:
  - userId: (Firebase auth UID)
  - shiftDate: "2025-10-27" format
  - orderType: "surprise" or "selected"
  - status: "pending"
  - selectedItems: (array of menu item IDs if selected)

### 5. Simulate Order Delivery (Manual)
In Firebase Console:
1. Find an order document
2. Update fields:
   - status: "delivered"
   - deliveryTime: (current timestamp)
3. Refresh app
4. "Confirmar que lo recibí" button should appear
5. Click it
6. Status should update to "confirmed"

## Common Issues

### Login doesn't work
- Check Firebase Authentication is enabled
- Verify user exists in Authentication tab
- Check browser console for errors

### No upcoming shifts showing
- Check date logic in DashboardPage.tsx
- Verify shift calculation (should show Mon/Wed/Sat)
- Check browser timezone

### Orders not saving
- Check Firestore rules
- Verify database exists
- Check browser console for Firebase errors

### Menu page empty
- No menu items in Firestore
- Run seed script or add manually

## Next: Build Admin Panel
Once user flow works, proceed to Phase 5 to build:
- Admin dashboard to view pending orders
- Interface to mark orders as ordered/delivered
- Email notifications

---

**Pro Tip**: Keep Firebase Console open in another tab to watch data changes in real-time!

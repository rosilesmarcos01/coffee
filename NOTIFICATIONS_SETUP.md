# Push Notifications Setup Guide

This guide explains how to set up and configure push notifications for the Coffee Delivery App.

## Overview

The app uses Firebase Cloud Messaging (FCM) to send push notifications to users when:
- Their coffee order is ready for pickup (status changes to "delivered")
- There are updates to their orders
- Admin notifications for new orders

## Files Created

### 1. Service Files
- **`src/services/pushNotifications.ts`** - Handles notification permissions and FCM token management
- **`src/services/notificationService.ts`** - Manages real-time order subscriptions and notifications

### 2. Service Worker
- **`public/firebase-messaging-sw.js`** - Service worker for background notifications
- **`public/coffee-icon.svg`** - Notification icon

### 3. Updated Files
- **`src/main.tsx`** - Registers the service worker
- **`src/pages/DashboardPage.tsx`** - Implements notification UI and functionality

## Setup Instructions

### Step 1: Get Your VAPID Key from Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `coffee-delivery-app-b29f8`
3. Click the gear icon ⚙️ next to "Project Overview" → **Project Settings**
4. Navigate to the **Cloud Messaging** tab
5. Scroll down to **Web configuration**
6. Find **Web Push certificates**
7. If you don't have a key pair, click **Generate key pair**
8. Copy the **Key pair** value (it should start with something like `BH...`)

### Step 2: Update the VAPID Key in Your Code

Open `src/services/pushNotifications.ts` and replace the placeholder VAPID key on line ~27:

```typescript
const token = await getToken(messaging, {
  vapidKey: 'YOUR_VAPID_KEY_HERE' // Replace with your actual VAPID key
});
```

Replace `'YOUR_VAPID_KEY_HERE'` with the key you copied from Firebase Console.

### Step 3: Enable Firebase Cloud Messaging API

1. In Firebase Console, go to **Project Settings** → **Cloud Messaging**
2. Make sure **Firebase Cloud Messaging API (V1)** is enabled
3. If it's not enabled, click **Enable** (it's usually enabled by default)

### Step 4: Test Notifications Locally

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser (Chrome, Firefox, or Edge recommended)
3. When prompted, **allow notifications**
4. Open browser DevTools (F12) and check the Console tab
5. You should see: `Service Worker registered successfully`

### Step 5: Testing the Notification Flow

1. **User Side:**
   - Log in to the app
   - Click the bell icon in the header to enable notifications
   - Accept the browser's notification permission prompt
   - Create a test order

2. **Admin Side:**
   - Log in as admin (rosilesmarcos99@gmail.com)
   - Go to `/admin`
   - Mark an order as "delivered"

3. **Result:**
   - The user should receive a browser notification
   - A toast notification should appear in the app
   - A notification sound should play
   - The order status should update automatically

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ | Full support |
| Firefox | ✅ | Full support |
| Safari | ⚠️ | Limited support (requires iOS 16.4+ / macOS 13+) |
| Edge | ✅ | Full support |
| Opera | ✅ | Full support |

**Note:** Notifications require HTTPS in production. They work on localhost for development.

## Notification Types

### 1. Foreground Notifications
When the app is open and active:
- Handled by `src/services/pushNotifications.ts` → `setupForegroundNotificationListener()`
- Shows as a toast notification inside the app
- Plays a sound
- Auto-refreshes order data

### 2. Background Notifications
When the app is closed or in a background tab:
- Handled by `public/firebase-messaging-sw.js`
- Shows as a browser notification
- Clicking opens the app
- Includes action buttons (View Order, Close)

## Troubleshooting

### Notifications Not Working?

1. **Check Browser Permissions:**
   - Chrome: Settings → Privacy and Security → Site Settings → Notifications
   - Verify that your site is allowed to send notifications

2. **Check Service Worker:**
   - Open DevTools → Application tab → Service Workers
   - Verify the service worker is registered and active

3. **Check Console Errors:**
   - Open DevTools → Console tab
   - Look for any Firebase or notification-related errors

4. **Verify VAPID Key:**
   - Make sure you've added the correct VAPID key from Firebase Console
   - The key should be about 88 characters long

5. **Check FCM Token:**
   - In DevTools Console, you should see: `FCM Token obtained: ...`
   - If not, check browser permissions and VAPID key

### Common Issues

**Issue:** "Messaging not supported in this browser"
- **Solution:** Use Chrome, Firefox, or Edge. Safari has limited support.

**Issue:** "Failed to register a ServiceWorker"
- **Solution:** 
  - Make sure you're using HTTPS (or localhost)
  - Clear browser cache and try again
  - Check if another service worker is already registered

**Issue:** "Permission denied" 
- **Solution:**
  - Check browser notification settings
  - Reset site permissions in browser settings
  - Try in incognito mode to test

**Issue:** Notifications not showing when app is closed
- **Solution:**
  - Verify the service worker is registered
  - Check that `firebase-messaging-sw.js` is accessible at `/firebase-messaging-sw.js`
  - Clear service worker cache and re-register

## Firebase Cloud Functions (Optional - For Email Notifications)

To send email notifications to the admin when a new order is created, you'll need to set up Firebase Cloud Functions:

### Prerequisites
- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase Functions initialized in your project

### Setup Steps

1. Initialize Firebase Functions (if not already done):
   ```bash
   firebase init functions
   ```

2. Install dependencies:
   ```bash
   cd functions
   npm install nodemailer
   ```

3. Create the function in `functions/src/index.ts`:

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// Configure email transporter (using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // Generate from Google Account settings
  }
});

// Trigger when new order is created
export const onOrderCreated = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snapshot, context) => {
    const order = snapshot.data();
    const orderId = context.params.orderId;

    // Send email to admin
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'admin-email@gmail.com',
      subject: `☕ New Coffee Order`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Date:</strong> ${order.shiftDate}</p>
        <p><strong>Type:</strong> ${order.orderType}</p>
        <p><strong>Status:</strong> ${order.status}</p>
      `
    });
  });

// Trigger when order status changes to 'delivered'
export const onOrderDelivered = functions.firestore
  .document('orders/{orderId}')
  .onUpdate(async (change, context) => {
    const newData = change.after.data();
    const oldData = change.before.data();

    // Check if status changed to 'delivered'
    if (oldData.status !== 'delivered' && newData.status === 'delivered') {
      // Get user's FCM token
      const userDoc = await admin.firestore()
        .collection('users')
        .doc(newData.userId)
        .get();
      
      const userData = userDoc.data();
      
      if (userData?.fcmToken) {
        // Send push notification
        await admin.messaging().send({
          token: userData.fcmToken,
          notification: {
            title: '☕ Tu café llegó!',
            body: 'Tu pedido está listo para recoger'
          },
          data: {
            orderId: context.params.orderId,
            type: 'delivery_notification',
            click_action: '/'
          }
        });
      }
    }
  });
```

4. Deploy the functions:
   ```bash
   firebase deploy --only functions
   ```

## Testing Push Notifications Manually

You can test notifications using the Firebase Console:

1. Go to Firebase Console → **Cloud Messaging**
2. Click **Send your first message**
3. Enter notification text
4. Click **Send test message**
5. Enter your FCM token (found in browser console after enabling notifications)
6. Click **Test**

## Production Deployment

### Vercel Deployment

1. Make sure all VAPID keys are correct
2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

4. **Important:** Vercel automatically serves files from the `public` directory at the root level, so `firebase-messaging-sw.js` will be accessible at `https://your-domain.com/firebase-messaging-sw.js`

5. Test notifications in production to ensure everything works

## Security Considerations

1. **VAPID Key:** Keep your VAPID key secure. It's safe to include in client-side code as it's meant to be public, but don't share it unnecessarily.

2. **FCM Tokens:** Store FCM tokens securely in Firestore with proper security rules.

3. **Firestore Rules:** Update your security rules to protect user FCM tokens:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId 
                    && request.resource.data.diff(resource.data).affectedKeys()
                       .hasOnly(['fcmToken', 'notificationsEnabled', 'lastTokenUpdate']);
    }
  }
}
```

## Monitoring and Analytics

You can monitor notification delivery in Firebase Console:

1. Go to **Cloud Messaging** → **Reports**
2. View metrics for:
   - Notifications sent
   - Notifications opened
   - Error rate
   - Device platforms

## User Experience Best Practices

1. **Ask Permission Contextually:** The app shows a notification prompt after the first login, explaining the benefits.

2. **Easy to Enable/Disable:** Users can toggle notifications using the bell icon in the header.

3. **Non-Intrusive:** The notification prompt can be dismissed and won't show again unless the user tries to enable notifications manually.

4. **Clear Value Proposition:** The prompt explains why notifications are useful.

## Next Steps

- [ ] Get VAPID key from Firebase Console
- [ ] Update `src/services/pushNotifications.ts` with your VAPID key
- [ ] Test notifications in development
- [ ] Set up Firebase Cloud Functions for email notifications (optional)
- [ ] Deploy to production
- [ ] Test notifications in production

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify Firebase Configuration
3. Review this guide's troubleshooting section
4. Check Firebase Cloud Messaging documentation: https://firebase.google.com/docs/cloud-messaging

---

**Last Updated:** October 25, 2025
**Firebase Project:** coffee-delivery-app-b29f8

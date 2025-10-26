# Pre-Deployment Checklist

## ⚠️ CRITICAL - Before Deploying

### 1. Get VAPID Key from Firebase Console
**This is REQUIRED for notifications to work!**

1. Go to: https://console.firebase.google.com/
2. Select project: `coffee-delivery-app-b29f8`
3. Click ⚙️ → Project Settings
4. Go to **Cloud Messaging** tab
5. Scroll to **Web Push certificates**
6. Click **Generate key pair** (if not already generated)
7. Copy the key (starts with "BH...")

Then update in `src/services/pushNotifications.ts` line ~27:
```typescript
vapidKey: 'YOUR_ACTUAL_KEY_HERE'
```

### 2. Test Build Locally

```bash
npm run build
npm run preview
```

Open http://localhost:4173 and test:
- [ ] Login works
- [ ] Dashboard loads
- [ ] Menu selection works
- [ ] Admin panel accessible
- [ ] No console errors

### 3. Firebase Security Rules

Make sure Firestore rules are properly configured. Check in Firebase Console.

### 4. Deploy to Vercel

```bash
# Install Vercel CLI if not installed
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

After deploying:

1. [ ] Test the deployed app URL
2. [ ] Enable notifications in browser
3. [ ] Create a test order
4. [ ] Mark as delivered from admin panel
5. [ ] Verify notification is received
6. [ ] Test on mobile device
7. [ ] Check browser console for errors

## Known Issues to Address Later

These are minor linting warnings that don't affect functionality:
- Service worker uses `self` (normal for service workers)
- Some `forEach` should be `for...of` (optimization)
- Some `window` should be `globalThis` (modernization)

## Environment

- **Frontend**: Vercel (automatic from Git)
- **Backend**: Firebase (already configured)
- **SSL**: Provided by Vercel (required for notifications)

## Important URLs

- **Firebase Console**: https://console.firebase.google.com/project/coffee-delivery-app-b29f8
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Repository**: https://github.com/rosilesmarcos01/coffee

---

Ready to deploy? Run: `npm run build` first!

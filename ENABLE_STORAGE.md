# ⚡ Quick Start: Enable Firebase Storage

## Step 1: Enable Firebase Storage

Before you can upload images, you need to enable Firebase Storage:

### Option A: Via Firebase Console (Recommended)

1. Go to: https://console.firebase.google.com/project/coffee-delivery-app-b29f8/storage
2. Click **"Get Started"**
3. Choose **"Start in production mode"** (we'll deploy custom rules)
4. Click **"Done"**

### Option B: Via Terminal

The error message shows you need to enable the API first. Visit the link provided by Firebase.

## Step 2: Deploy Storage Rules

After enabling Firebase Storage, deploy the security rules:

```bash
cd coffee-delivery-app
firebase deploy --only storage
```

Expected output:
```
✔ Deploy complete!
Storage Rules: Released and ready
```

## Step 3: Verify Setup

1. Go to Firebase Console → Storage
2. You should see an empty storage bucket
3. Check the Rules tab to verify your rules are deployed

## Step 4: Test Image Upload

1. Start your dev server: `npm run dev`
2. Login with admin account
3. Navigate to `/admin/menu`
4. Click "Agregar Item"
5. Try uploading an image

## What Happens Next

Once Firebase Storage is enabled:

✅ **Admin Panel** (`/admin/menu`):
- Upload images when adding menu items
- Edit existing items and replace images
- Delete items (images are automatically removed)

✅ **Dashboard** (`/`):
- Menu suggestions show real images
- Coffee icon as fallback for items without images

✅ **Menu Page** (`/menu`):
- All items show real images
- Better user experience for ordering

## Storage Structure

```
Firebase Storage (coffee-delivery-app-b29f8.firebasestorage.app)
└── menu-items/
    ├── 1730000000000-caramel-macchiato.jpg
    ├── 1730000001000-iced-latte.png
    └── 1730000002000-vanilla-frappuccino.webp
```

## Quick Commands

```bash
# Deploy storage rules
firebase deploy --only storage

# Start dev server
npm run dev

# Build for production
npm run build
```

## Troubleshooting

### "Storage not enabled" error
→ Visit the Firebase Console link and enable Storage

### "Permission denied" when uploading
→ Make sure you're logged in with your admin account
→ Verify storage rules are deployed

### Images not showing after upload
→ Wait 2-3 seconds for Firebase to process
→ Refresh the page
→ Check browser console for errors

## Next Steps After Enabling

1. ✅ Enable Firebase Storage (Step 1 above)
2. ✅ Deploy storage rules: `firebase deploy --only storage`
3. ✅ Test by adding a menu item with an image
4. ✅ Verify image shows on dashboard and menu page

---

**Ready to go!** Once you complete Step 1, everything will work perfectly. 🚀

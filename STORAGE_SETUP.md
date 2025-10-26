# Firebase Storage Setup for Admin Menu Management

## Quick Setup

After adding menu management with image upload functionality, you need to deploy the Firebase Storage rules.

## Deploy Storage Rules

Run this command in your terminal:

```bash
firebase deploy --only storage
```

This will deploy the `storage.rules` file to Firebase.

## Verify Storage Rules

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `coffee-delivery-app-b29f8`
3. Navigate to **Storage** in the left sidebar
4. Click on the **Rules** tab
5. Verify the rules are deployed:

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /menu-items/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## What These Rules Do

- **Read Access (Public)**: Anyone can view menu item images
  - Necessary for users to see images on dashboard and menu pages
  - Images are served via public URLs

- **Write Access (Authenticated Only)**: Only logged-in users can upload/delete
  - Prevents unauthorized image uploads
  - Secures your storage from abuse

## Storage Structure

Images will be stored in Firebase Storage with this structure:

```
gs://your-bucket/
└── menu-items/
    ├── 1730000000000-caramel-macchiato.jpg
    ├── 1730000001000-iced-latte.png
    └── 1730000002000-cold-brew.webp
```

Each filename includes:
- Timestamp (unique identifier)
- Original filename

## Testing Upload

1. Login to admin panel
2. Navigate to Menu Management (`/admin/menu`)
3. Click "Agregar Item"
4. Upload a test image
5. Check Firebase Console → Storage to verify upload

## Troubleshooting

### Error: "Permission denied"
**Problem**: Storage rules not deployed
**Solution**: Run `firebase deploy --only storage`

### Error: "Storage bucket not configured"
**Problem**: Firebase Storage not initialized
**Solution**: Enable Firebase Storage in Firebase Console

### Images not displaying
**Problem**: CORS or URL issues
**Solution**: 
1. Check image URL in Firestore
2. Verify Firebase Storage is public for reads
3. Check browser console for errors

## Storage Quotas (Spark Plan - Free)

- **Storage**: 5 GB total
- **Downloads**: 1 GB/day
- **Uploads**: 20k uploads/day

### Monitoring Usage

Check your storage usage:
1. Firebase Console → Storage
2. View usage statistics
3. Monitor approaching limits

### Optimization Tips

1. **Compress images** before upload (use TinyPNG, Squoosh, etc.)
2. **Resize images** to max 1000x1000px
3. **Use WebP format** for better compression
4. **Delete old images** when updating menu items

## Security Best Practices

✅ **Currently Implemented:**
- Only authenticated users can upload
- Image size limited to 5MB client-side
- File type validation (images only)

🔒 **Additional Security (Optional):**

Add validation to storage rules:

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /menu-items/{imageId} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024  // Max 5MB
                   && request.resource.contentType.matches('image/.*');  // Only images
    }
  }
}
```

## Backup Strategy

Images are automatically backed up by Firebase, but consider:

1. **Export URLs**: Store image URLs in a backup file
2. **Download Important Images**: Keep local copies of critical assets
3. **Version Control**: Track changes to menu items in Firestore

## Next Steps

After deploying storage rules:

1. ✅ Deploy rules: `firebase deploy --only storage`
2. ✅ Test image upload in admin panel
3. ✅ Verify images display on dashboard
4. ✅ Verify images display on menu page
5. ✅ Document process for team

## Support

For issues:
- Check Firebase Console → Storage → Usage & Files
- Review browser console for errors
- Verify authentication is working
- Test with different image formats/sizes

---

**Created**: October 2025  
**For Project**: Night Shift Coffee Delivery App

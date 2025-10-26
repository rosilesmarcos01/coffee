# Admin Menu Management Guide

## Overview
The Admin Menu Management system allows you to add, edit, and manage menu items with images directly from the admin interface.

## Accessing the Menu Management Page

1. **Login** with your admin account (`rosilesmarcos99@gmail.com`)
2. Navigate to the **Admin Panel** (click the gear icon in the dashboard header)
3. Click the **"Gestionar Menú"** button in the top-right corner of the Admin Panel

## Features

### 1. View All Menu Items
- See all menu items in a grid layout
- Each card shows:
  - Item image (or coffee icon placeholder)
  - Item name
  - Category
  - Description (first 2 lines)
  - Availability status (Disponible/No disponible)
  - Action buttons (Enable/Disable, Edit, Delete)

### 2. Add New Menu Item

**Steps:**
1. Click **"Agregar Item"** button (top-right)
2. Fill in the form:
   - **Image**: Click the upload area to select an image (PNG, JPG, WEBP, max 5MB)
   - **Name**: Enter the product name (e.g., "Caramel Macchiato")
   - **Category**: Select from 14 categories
   - **Description**: Write a detailed description
   - **Availability**: Toggle on/off (default: Available)
3. Click **"Crear Item"**

**Categories Available:**
- Temporada (Seasonal)
- Café Caliente (Hot Coffee)
- Café Frío (Iced Coffee)
- Cold Brew
- Frappuccino Café
- Frappuccino Crema
- Refreshers
- Espresso Batido (Shaken Espresso)
- Té Caliente (Hot Tea)
- Té Frío (Iced Tea)
- Granos de Café (Coffee Beans)
- Café (Coffee)
- Comida (Food)
- Combo

### 3. Edit Existing Item

**Steps:**
1. Click the **blue Edit button** (pencil icon) on any item card
2. Update any field:
   - Upload a new image (or keep the existing one)
   - Change name, category, or description
   - Toggle availability
3. Click **"Actualizar"**

**Note:** If you upload a new image, it will replace the old one.

### 4. Delete Menu Item

**Steps:**
1. Click the **red Delete button** (trash icon)
2. Confirm deletion in the popup
3. The item and its image will be permanently removed from Firebase

### 5. Enable/Disable Items

**Quick Toggle:**
- Click **"Deshabilitar"** to hide the item from the user menu (keeps it in database)
- Click **"Habilitar"** to make it visible again

**Use Cases:**
- Temporarily disable seasonal items
- Hide out-of-stock items without deleting them

## Image Guidelines

### Best Practices:
- **Size**: 500x500px to 1000x1000px recommended
- **Format**: PNG, JPG, or WEBP
- **File Size**: Under 5MB (smaller is better for performance)
- **Aspect Ratio**: Square (1:1) works best
- **Quality**: High-resolution product photos

### Image Storage:
- Images are stored in **Firebase Storage** under `menu-items/`
- Each image has a unique timestamp in its filename
- Images are automatically deleted when you delete an item

## How Images Appear to Users

### Dashboard Page:
- Displays 4 menu items in the "Sugerencias Para Usted" section
- Shows real images if available, coffee icon placeholder if not
- Filtered by selected category

### Menu Page:
- Shows all available menu items
- Users can select items for their order
- Images help users identify and choose items

## Tips & Tricks

1. **Start with Popular Items**: Add images to your most ordered items first
2. **Consistent Style**: Use similar photo styles for a professional look
3. **Compress Images**: Use tools like TinyPNG before uploading to reduce file size
4. **Test on Mobile**: Check how images look on mobile devices
5. **Use Descriptive Names**: Help users understand what they're ordering

## Troubleshooting

### Image Won't Upload
- Check file size (must be under 5MB)
- Verify file format (PNG, JPG, WEBP only)
- Check your internet connection
- Try refreshing the page

### Image Not Showing
- Wait a few seconds for Firebase to process
- Check browser console for errors
- Verify the image URL in Firebase Storage

### Changes Not Appearing
- Refresh the dashboard/menu page
- Clear browser cache if needed
- Check if item is marked as "available"

## Firebase Storage Rules

Make sure your Firebase Storage rules allow uploads:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /menu-items/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## API Reference

### MenuItem Type
```typescript
interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  available: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

## Support

For issues or questions, check:
1. Browser console for error messages
2. Firebase Console → Storage (to verify image uploads)
3. Firebase Console → Firestore → menu collection (to verify data)

---

**Last Updated**: October 2025
**Version**: 1.0.0

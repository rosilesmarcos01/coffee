# ☕ Night Shift Coffee Delivery App

A mobile-friendly web application for managing coffee deliveries during night shifts (Monday, Wednesday, Saturday).

## 📋 What's Been Built (Phases 1-4)

### ✅ Phase 1: Project Setup
- React + TypeScript + Vite project initialized
- Dependencies installed:
  - Firebase (authentication, firestore, messaging)
  - React Router DOM (routing)
  - Tailwind CSS v4 (styling with custom coffee theme)
  - date-fns (date handling)
  - lucide-react (icons)
  - react-hot-toast (notifications)

### ✅ Phase 2: Firebase Configuration
- Firebase config file created with your project credentials
- Firebase services initialized (Auth, Firestore, Messaging)
- Security rules documented in `FIREBASE_SETUP.md`

### ✅ Phase 3: Database Schema
- TypeScript interfaces defined for:
  - MenuItem
  - Order
  - User
- Menu seed script created (11 items ready to populate)

### ✅ Phase 4: Core Components
- **AuthContext**: Handles authentication state
- **LoginPage**: Email/password login
- **DashboardPage**: Shows upcoming shifts, order management, confirmation
- **MenuPage**: Browse and select menu items
- **AdminPage**: View and manage orders, mark as ordered/delivered
- **App Router**: Protected routes and navigation

## 🚀 Quick Start

### 1. Start Development Server
```bash
cd coffee-delivery-app
npm run dev
```

The app will open at `http://localhost:5173`

### 2. Configure Firebase (IMPORTANT - Do This First!)

Follow the instructions in `FIREBASE_SETUP.md`:

1. **Enable Authentication**
   - Go to Firebase Console > Authentication
   - Enable Email/Password provider
   - Add user: gabriela@coffeemail.com with a secure password

2. **Create Firestore Database**
   - Go to Firestore Database > Create Database
   - Choose production mode
   - Select region (us-central for Mexico)

3. **Add Security Rules**
   - Copy rules from `FIREBASE_SETUP.md` to Firestore Rules

4. **Populate Menu**
   - Option A: Manually add items via Firebase Console
   - Option B: Run the seed script (see below)

### 3. Seed Menu Items (Optional)

Edit `src/scripts/seedMenu.ts` and uncomment the last line:
```typescript
seedMenu();
```

Then import and run it from your dev tools console, or create a temporary page to execute it.

Alternatively, manually add items via Firebase Console (Firestore > menu collection).

### 4. Test the Application

1. Open `http://localhost:5173/login`
2. Login with: gabriela@coffeemail.com / (password you set)
3. You should see the dashboard with upcoming shifts
4. Try both ordering options:
   - ✨ "Sorpréndeme" (surprise order)
   - 📋 "Ver Menú" (select from menu)

## 📁 Project Structure

```
coffee-delivery-app/
├── src/
│   ├── config/
│   │   └── firebase.ts          # Firebase configuration
│   ├── contexts/
│   │   └── AuthContext.tsx      # Authentication context
│   ├── pages/
│   │   ├── DashboardPage.tsx    # Main dashboard
│   │   ├── LoginPage.tsx        # Login page
│   │   ├── MenuPage.tsx         # Menu selection
│   │   └── AdminPage.tsx        # Admin panel (NEW)
│   ├── scripts/
│   │   └── seedMenu.ts          # Script to populate menu
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── App.tsx                  # Main app with routing
│   ├── main.tsx                 # Entry point
│   └── index.css                # Tailwind styles
├── FIREBASE_SETUP.md            # Firebase setup instructions
├── ADMIN_GUIDE.md               # Admin panel user guide (NEW)
├── package.json
├── tailwind.config.js           # Custom coffee theme
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Features Implemented

### For Gabriela (User):
- ✅ Login with email/password
- ✅ View upcoming night shifts (Mon, Wed, Sat)
- ✅ Choose "Surprise me" for random coffee
- ✅ Browse menu and select specific items
- ✅ Track order status (pending → ordered → delivered → confirmed)
- ✅ Confirm delivery receipt
- ✅ View stats (coffees this month, next shift)

### For You (Admin):
- ✅ Access admin panel via settings icon or `/admin` route
- ✅ View all orders with filtering (pending, ordered, all)
- ✅ See order details and what Gabriela selected
- ✅ Mark orders as "ordered" after ordering on Rappi
- ✅ Mark orders as "delivered" when delivered to hospital
- ✅ View statistics (total, pending, ordered, confirmed)
- ✅ Real-time status updates

### Order Flow:
1. Gabriela logs in
2. Sees upcoming shifts (next 3 weeks of Mon/Wed/Sat)
3. For each shift, chooses:
   - "Sorpréndeme" → Creates surprise order immediately
   - "Ver Menú" → Browses menu, selects items, confirms
4. Order status: `pending` (waiting for you to order)
5. **You check admin panel** and see the order
6. You order on Rappi and mark as `ordered` in admin panel
7. When delivered, you mark as `delivered` in admin panel
8. Gabriela receives notification (Phase 6) or sees status in dashboard
9. She confirms receipt → status becomes `confirmed`

## 🎯 Next Steps

### Immediate (To Make It Work):
1. ✅ **Configure Firebase** (see FIREBASE_SETUP.md)
2. ✅ **Create Gabriela's account** in Firebase Authentication
3. ✅ **Populate menu** via Console or seed script
4. ✅ **Test the flow** locally
5. ✅ **Test admin panel** (see ADMIN_GUIDE.md)

### Phase 6: Email & Push Notifications (Optional but Recommended)
- Email notifications when Gabriela places order
- Push notifications when you mark as delivered
- Cloud Functions setup for automated notifications

### Phase 7: Order History (Optional)
- View past orders
- Order statistics and patterns
- Favorite items tracking

### Phase 8: Deployment (When Ready)
- Deploy to Vercel
- Set up custom domain (optional)
- Configure environment variables

## 🔧 Troubleshooting

### "Cannot find module" errors
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then `npm install`

### Firebase errors
- Check that you've enabled Authentication
- Verify Firestore database is created
- Ensure security rules are set
- Confirm user account exists

### Build errors
- Run `npm run build` to check for TypeScript errors
- Check console for specific error messages

### Styling issues
- Tailwind v4 is installed, which uses new syntax
- Custom coffee theme colors are available: `coffee-50` to `coffee-900`

## 🔐 Security Notes

- Firebase config is client-side safe (API key is meant to be public)
- Security is enforced by Firestore rules
- User can only read/write their own orders
- Menu items are read-only for users

## 📧 Contact & Support

**Admin Email**: rosilesmarcos99@gmail.com
**User Email**: gabriela@coffeemail.com

## 🎉 What Makes This Special

This isn't just a delivery app—it's a thoughtful way to support someone during their night shifts. The "surprise me" feature adds an element of delight, while the menu option gives control when needed.

---

**Built with ❤️ for Gabriela's night shifts**

Next: Follow `FIREBASE_SETUP.md` to configure Firebase and start testing!

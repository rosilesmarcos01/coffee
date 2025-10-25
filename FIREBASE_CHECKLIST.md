# Firebase Console Setup Checklist

Go to: https://console.firebase.google.com/project/coffee-delivery-app-b29f8

## ☑️ Setup Checklist

### 1. Authentication (CRITICAL)
- [ ] Navigate to: Authentication > Get Started
- [ ] Click "Email/Password" under Sign-in providers
- [ ] Toggle "Enable" switch
- [ ] Click "Save"
- [ ] Click "Add user" button
- [ ] Enter:
  - Email: `gabriela@coffeemail.com`
  - Password: (create a secure password)
- [ ] Click "Add user"
- [ ] ✅ **Share the password with Gabriela securely**

### 2. Firestore Database (CRITICAL)
- [ ] Navigate to: Firestore Database
- [ ] Click "Create database"
- [ ] Select "Start in production mode"
- [ ] Choose location: `us-central` (closest to Mexico)
- [ ] Click "Enable"
- [ ] Wait for database creation (~1 minute)

### 3. Security Rules (CRITICAL)
- [ ] In Firestore Database, click "Rules" tab
- [ ] Replace ALL content with:

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

- [ ] Click "Publish"

### 4. Create Menu Collection (CRITICAL)
- [ ] In Firestore Database, click "Start collection"
- [ ] Collection ID: `menu`
- [ ] Click "Next"

**Add these documents** (repeat for each item):

#### Item 1: Caffe Latte
- Document ID: (auto)
- Fields:
  - `name` (string): "Caffe Latte"
  - `category` (string): "coffee"
  - `description` (string): "Espresso con leche vaporizada"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 2: Cappuccino
- Document ID: (auto)
- Fields:
  - `name` (string): "Cappuccino"
  - `category` (string): "coffee"
  - `description` (string): "Espresso con espuma de leche"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 3: Iced Coffee
- Document ID: (auto)
- Fields:
  - `name` (string): "Iced Coffee"
  - `category` (string): "coffee"
  - `description` (string): "Café frío con hielo"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 4: Americano
- Document ID: (auto)
- Fields:
  - `name` (string): "Americano"
  - `category` (string): "coffee"
  - `description` (string): "Espresso con agua caliente"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 5: Mocha
- Document ID: (auto)
- Fields:
  - `name` (string): "Mocha"
  - `category` (string): "coffee"
  - `description` (string): "Espresso con chocolate y leche"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 6: Turkey & Cheese Sandwich
- Document ID: (auto)
- Fields:
  - `name` (string): "Turkey & Cheese Sandwich"
  - `category` (string): "food"
  - `description` (string): "Sandwich de pavo con queso"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 7: Blueberry Muffin
- Document ID: (auto)
- Fields:
  - `name` (string): "Blueberry Muffin"
  - `category` (string): "food"
  - `description` (string): "Muffin de arándanos"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 8: Chocolate Croissant
- Document ID: (auto)
- Fields:
  - `name` (string): "Chocolate Croissant"
  - `category` (string): "food"
  - `description` (string): "Croissant relleno de chocolate"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 9: Banana Bread
- Document ID: (auto)
- Fields:
  - `name` (string): "Banana Bread"
  - `category` (string): "food"
  - `description` (string): "Pan de plátano casero"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 10: Coffee + Sandwich Combo
- Document ID: (auto)
- Fields:
  - `name` (string): "Coffee + Sandwich Combo"
  - `category` (string): "combo"
  - `description` (string): "Café mediano con sandwich"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

#### Item 11: Coffee + Muffin Combo
- Document ID: (auto)
- Fields:
  - `name` (string): "Coffee + Muffin Combo"
  - `category` (string): "combo"
  - `description` (string): "Café mediano con muffin"
  - `available` (boolean): true
  - `createdAt` (timestamp): (current date/time)

---

## ✅ Verification

After completing all steps:
1. Check Authentication > Users: should see gabriela@coffeemail.com
2. Check Firestore Database > menu: should see 11 documents
3. Check Firestore Database > Rules: should be published
4. Test login at http://localhost:5173/login

## 📝 Notes

- **Important**: Menu collection needs to be created BEFORE first login
- **Security**: Rules must be published for app to work
- **Alternative**: Use the seed script in `src/scripts/seedMenu.ts` instead of manual entry
  - Uncomment the last line: `seedMenu()`
  - Import it temporarily in your app to run once
  - Then remove the import

## ⏱️ Estimated Time: 15-20 minutes

Most time will be spent adding menu items. Consider using the seed script to save time!

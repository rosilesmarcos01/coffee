import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load service account key
const serviceAccountPath = resolve(process.cwd(), 'coffee-delivery-app-b29f8-firebase-adminsdk-fbsvc-bebc99bf5c.json');
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'coffee-delivery-app-b29f8'
});

const db = admin.firestore();

const menuItems = [
  {
    name: "Caffe Latte",
    category: "coffee",
    description: "Espresso con leche vaporizada",
    available: true,
  },
  {
    name: "Cappuccino",
    category: "coffee",
    description: "Espresso con espuma de leche",
    available: true,
  },
  {
    name: "Iced Coffee",
    category: "coffee",
    description: "Café frío con hielo",
    available: true,
  },
  {
    name: "Americano",
    category: "coffee",
    description: "Espresso con agua caliente",
    available: true,
  },
  {
    name: "Mocha",
    category: "coffee",
    description: "Espresso con chocolate y leche",
    available: true,
  },
  {
    name: "Turkey & Cheese Sandwich",
    category: "food",
    description: "Sandwich de pavo con queso",
    available: true,
  },
  {
    name: "Blueberry Muffin",
    category: "food",
    description: "Muffin de arándanos",
    available: true,
  },
  {
    name: "Chocolate Croissant",
    category: "food",
    description: "Croissant relleno de chocolate",
    available: true,
  },
  {
    name: "Banana Bread",
    category: "food",
    description: "Pan de plátano casero",
    available: true,
  },
  {
    name: "Coffee + Sandwich Combo",
    category: "combo",
    description: "Café mediano con sandwich",
    available: true,
  },
  {
    name: "Coffee + Muffin Combo",
    category: "combo",
    description: "Café mediano con muffin",
    available: true,
  },
];

async function seedMenu() {
  const menuRef = db.collection('menu');
  
  try {
    console.log('🌱 Starting menu seed...\n');
    
    for (const item of menuItems) {
      const docRef = await menuRef.add({
        ...item,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log(`✅ Added: ${item.name} (${docRef.id})`);
    }
    
    console.log('\n🎉 Menu seeded successfully!');
    console.log(`📊 Total items added: ${menuItems.length}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding menu:', error);
    process.exit(1);
  }
}

seedMenu();

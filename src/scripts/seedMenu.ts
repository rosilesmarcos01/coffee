import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

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

export async function seedMenu() {
  const menuRef = collection(db, 'menu');
  
  try {
    for (const item of menuItems) {
      await addDoc(menuRef, {
        ...item,
        createdAt: new Date(),
      });
      console.log(`Added: ${item.name}`);
    }
    
    console.log('✅ Menu seeded successfully!');
  } catch (error) {
    console.error('Error seeding menu:', error);
  }
}

// Uncomment to run:
// seedMenu();

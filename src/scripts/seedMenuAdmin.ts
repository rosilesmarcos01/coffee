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
  // Bebidas de Temporada (Invierno 2025)
  {
    name: "Cortado Clásico",
    category: "seasonal",
    description: "Espresso ristretto con leche espumosa, equilibrado y elegante",
    available: true,
  },
  {
    name: "Brown Sugar Cinnamon Oatmilk Cortado",
    category: "seasonal",
    description: "Cortado con notas de azúcar morena y canela, preparado con leche de avena",
    available: true,
  },
  {
    name: "Pumpkin Spice Latte",
    category: "seasonal",
    description: "Bebida con el característico sabor de especias de calabaza",
    available: true,
  },
  {
    name: "Pumpkin Spice Frappuccino",
    category: "seasonal",
    description: "Frappuccino con el característico sabor de especias de calabaza",
    available: true,
  },
  {
    name: "Apple Crisp",
    category: "seasonal",
    description: "Bebida con sabor a manzana crujiente de temporada",
    available: true,
  },

  // Cafés Calientes
  {
    name: "Café Americano",
    category: "hot-coffee",
    description: "Espresso con agua caliente, fuerte y robusto",
    available: true,
  },
  {
    name: "Latte",
    category: "hot-coffee",
    description: "Combinación suave de espresso y leche al vapor con ligera capa de espuma",
    available: true,
  },
  {
    name: "Cappuccino",
    category: "hot-coffee",
    description: "Mezcla equilibrada de espresso, leche al vapor y espuma espesa",
    available: true,
  },
  {
    name: "Caramel Macchiato",
    category: "hot-coffee",
    description: "Capas de leche espumosa, espresso y caramelo, dulce y reconfortante",
    available: true,
  },
  {
    name: "Flat White",
    category: "hot-coffee",
    description: "Espresso con leche microespumada, textura aterciopelada",
    available: true,
  },
  {
    name: "Mocha Blanco",
    category: "hot-coffee",
    description: "Espresso con chocolate blanco y leche al vapor",
    available: true,
  },
  {
    name: "Café del Día",
    category: "hot-coffee",
    description: "Café filtrado del día, opción clásica",
    available: true,
  },
  {
    name: "Chocolate Mexicano",
    category: "hot-coffee",
    description: "Bebida caliente con cacao y toque de canela",
    available: true,
  },

  // Cafés Fríos
  {
    name: "Iced Latte",
    category: "iced-coffee",
    description: "Espresso con leche fría sobre hielo",
    available: true,
  },
  {
    name: "Iced Americano",
    category: "iced-coffee",
    description: "Espresso con agua fría sobre hielo",
    available: true,
  },
  {
    name: "Iced Caramel Macchiato",
    category: "iced-coffee",
    description: "Versión fría del clásico macchiato con caramelo",
    available: true,
  },
  {
    name: "Helado Matcha Green Tea Latte",
    category: "iced-coffee",
    description: "Té matcha japonés con leche sobre hielo",
    available: true,
  },

  // Cold Brew
  {
    name: "Cold Brew",
    category: "cold-brew",
    description: "Café elaborado en frío durante horas, suave y menos ácido",
    available: true,
  },
  {
    name: "Cold Brew Nitro",
    category: "cold-brew",
    description: "Cold brew infundido con nitrógeno, textura sedosa y sabor intenso",
    available: true,
  },

  // Frappuccinos® de Café
  {
    name: "Café Frappuccino",
    category: "frappuccino-coffee",
    description: "Café mezclado con hielo y leche, cremoso y refrescante",
    available: true,
  },
  {
    name: "Mocha Frappuccino",
    category: "frappuccino-coffee",
    description: "Chocolate, café y hielo mezclados, ideal para días calurosos",
    available: true,
  },
  {
    name: "Caramel Frappuccino",
    category: "frappuccino-coffee",
    description: "Jarabe de caramelo mezclado con café, leche y hielo",
    available: true,
  },
  {
    name: "Mocha Cookie Crumble Frappuccino",
    category: "frappuccino-coffee",
    description: "Frappuccino de mocha con galletas trituradas y crema batida",
    available: true,
  },
  {
    name: "Caramel Ribbon Crunch Frappuccino",
    category: "frappuccino-coffee",
    description: "Caramelo, café y hielo con salsa de caramelo oscuro y crema",
    available: true,
  },

  // Frappuccinos® Crema (sin café)
  {
    name: "Frappuccino de Fresa y Crema",
    category: "frappuccino-cream",
    description: "Fresas frescas con crema batida, dulce y refrescante",
    available: true,
  },
  {
    name: "Vainilla Cream Frappuccino",
    category: "frappuccino-cream",
    description: "Crema de vainilla mezclada con hielo",
    available: true,
  },
  {
    name: "Chocolate Cream Frappuccino",
    category: "frappuccino-cream",
    description: "Chocolate cremoso sin café",
    available: true,
  },
  {
    name: "Cookies and Cream Frappuccino",
    category: "frappuccino-cream",
    description: "Galletas con crema mezcladas con hielo",
    available: true,
  },
  {
    name: "Matcha Cream Frappuccino",
    category: "frappuccino-cream",
    description: "Té verde matcha cremoso sin café",
    available: true,
  },
  {
    name: "Cajeta Cream Frappuccino",
    category: "frappuccino-cream",
    description: "Dulce de leche cremoso mexicano",
    available: true,
  },

  // Starbucks Refreshers®
  {
    name: "Strawberry Açaí Refresher",
    category: "refreshers",
    description: "Bebida refrescante con fresas y açaí",
    available: true,
  },
  {
    name: "Pink Drink",
    category: "refreshers",
    description: "Strawberry Açaí con leche de coco, bebida rosa icónica",
    available: true,
  },
  {
    name: "Dragon Drink",
    category: "refreshers",
    description: "Mango dragonfruit con leche de coco",
    available: true,
  },
  {
    name: "Piñacoco Yogurt Refresher",
    category: "refreshers",
    description: "Piña y coco con toque de yogurt",
    available: true,
  },
  {
    name: "Berry Yogurt Refresher",
    category: "refreshers",
    description: "Frutos rojos con yogurt",
    available: true,
  },

  // Iced Shaken Espresso
  {
    name: "Iced Shaken Espresso Con Mocha",
    category: "shaken-espresso",
    description: "Espresso agitado con chocolate",
    available: true,
  },
  {
    name: "Iced Shaken Espresso Con Avellana",
    category: "shaken-espresso",
    description: "Espresso agitado con jarabe de avellana",
    available: true,
  },

  // Tés Calientes
  {
    name: "Té Chai Latte",
    category: "hot-tea",
    description: "Té especiado con leche, cálido y reconfortante sin cafeína",
    available: true,
  },
  {
    name: "Té de Menta con Jarabe de Menta",
    category: "hot-tea",
    description: "Infusión refrescante de menta",
    available: true,
  },
  {
    name: "Té Verde",
    category: "hot-tea",
    description: "Infusión de té verde puro",
    available: true,
  },
  {
    name: "Té Negro",
    category: "hot-tea",
    description: "Té negro clásico",
    available: true,
  },
  {
    name: "Té de Hibiscus",
    category: "hot-tea",
    description: "Infusión floral y afrutada",
    available: true,
  },

  // Tés Fríos
  {
    name: "Iced Té de Menta",
    category: "iced-tea",
    description: "Té de menta helado",
    available: true,
  },
  {
    name: "Iced Green Tea",
    category: "iced-tea",
    description: "Té verde sobre hielo",
    available: true,
  },
  {
    name: "Iced Hibiscus Tea",
    category: "iced-tea",
    description: "Té de hibiscus frío y refrescante",
    available: true,
  },

  // Alimentos - Desayunos & Paninis
  {
    name: "Panini de Jamón y Queso",
    category: "food",
    description: "Pan rústico tostado con jamón de calidad y queso fundido",
    available: true,
  },

  // Panadería
  {
    name: "Croissant de Chocolate",
    category: "food",
    description: "Hojaldre con chocolate, clásico francés",
    available: true,
  },
  {
    name: "Pastel de Zanahoria",
    category: "food",
    description: "Suave, dulce y especiado",
    available: true,
  },
  {
    name: "Panqué de Limón",
    category: "food",
    description: "Esponjoso pan con sabor cítrico",
    available: true,
  },
  {
    name: "Donas",
    category: "food",
    description: "Variedad de donas clásicas",
    available: true,
  },

  // Cafés en Grano
  {
    name: "Starbucks Mexico Puebla",
    category: "coffee-beans",
    description: "Tueste ligero con notas de canela y naranja confitada, cultivado en suelos volcánicos",
    available: true,
  },
  {
    name: "Guatemala Casi Cielo",
    category: "coffee-beans",
    description: "Tueste medio con notas de limón Meyer y cacao, acidez cítrica",
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

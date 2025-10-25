import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as readline from 'readline';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBB8lfGEwxX18XWyvKn9KNT2Yt6rFVGwIo",
  authDomain: "coffee-delivery-app-b29f8.firebaseapp.com",
  projectId: "coffee-delivery-app-b29f8",
  storageBucket: "coffee-delivery-app-b29f8.firebasestorage.app",
  messagingSenderId: "545597275258",
  appId: "1:545597275258:web:b3eb28b65cc7b534fdcfc3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

async function unseedDatabase() {
  try {
    console.log('🗑️  Database Cleanup Tool\n');
    console.log('What would you like to delete?');
    console.log('1. Menu items only');
    console.log('2. Orders only');
    console.log('3. Both menu and orders');
    console.log('4. Everything (including users)');
    console.log('5. Cancel\n');
    
    const choice = await question('Enter choice (1-5): ');

    if (choice === '5' || !choice) {
      console.log('❌ Cancelled');
      rl.close();
      process.exit(0);
    }

    if (!['1', '2', '3', '4'].includes(choice)) {
      console.log('❌ Invalid choice');
      rl.close();
      process.exit(1);
    }

    console.log('\n⚠️  WARNING: This will permanently delete data!');
    const confirm = await question('Type "DELETE" to confirm: ');
    
    if (confirm !== 'DELETE') {
      console.log('❌ Cancelled - confirmation not received');
      rl.close();
      process.exit(0);
    }

    // Authenticate
    console.log('\n🔐 Authenticating...');
    const email = 'rosilesmarcos99@gmail.com';
    const password = await question('Enter your password: ');
    
    if (!password) {
      console.log('❌ Password required');
      rl.close();
      process.exit(1);
    }

    await signInWithEmailAndPassword(auth, email, password);
    console.log('✅ Authenticated successfully\n');

    if (choice === '1' || choice === '3' || choice === '4') {
      await clearCollection('menu', 'Menu items');
    }

    if (choice === '2' || choice === '3' || choice === '4') {
      await clearCollection('orders', 'Orders');
    }

    if (choice === '4') {
      await clearCollection('users', 'Users');
    }

    console.log('\n✅ Database cleanup complete!');
    rl.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    rl.close();
    process.exit(1);
  }
}

async function clearCollection(collectionName: string, displayName: string) {
  try {
    console.log(`\n🗑️  Clearing ${displayName}...`);
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    
    if (snapshot.empty) {
      console.log(`   No ${displayName.toLowerCase()} to delete`);
      return;
    }

    console.log(`   Found ${snapshot.size} ${displayName.toLowerCase()}`);
    
    let deleted = 0;
    for (const document of snapshot.docs) {
      await deleteDoc(doc(db, collectionName, document.id));
      deleted++;
      console.log(`   Deleted ${deleted}/${snapshot.size}: ${document.id}`);
    }
    
    console.log(`✅ Deleted all ${displayName.toLowerCase()}`);
  } catch (error) {
    console.error(`❌ Error clearing ${displayName}:`, error);
  }
}

unseedDatabase();

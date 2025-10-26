import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging, isSupported } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBB8lfGEwxX18XWyvKn9KNT2Yt6rFVGwIo",
  authDomain: "coffee-delivery-app-b29f8.firebaseapp.com",
  projectId: "coffee-delivery-app-b29f8",
  storageBucket: "coffee-delivery-app-b29f8.firebasestorage.app",
  messagingSenderId: "545597275258",
  appId: "1:545597275258:web:b3eb28b65cc7b534fdcfc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize messaging (only if supported)
export let messaging: ReturnType<typeof getMessaging> | undefined;

(async () => {
  const supported = await isSupported();
  if (supported) {
    messaging = getMessaging(app);
  }
})();

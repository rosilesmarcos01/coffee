# Firebase Admin SDK Setup for Seeding

## Step 1: Get Service Account Key

1. Go to **Firebase Console**: https://console.firebase.google.com/project/coffee-delivery-app-b29f8/settings/serviceaccounts/adminsdk

2. Click **"Generate new private key"**

3. Click **"Generate key"** in the confirmation dialog

4. A JSON file will be downloaded (e.g., `coffee-delivery-app-b29f8-firebase-adminsdk-xxxxx.json`)

## Step 2: Set Up Service Account

**Option A: Using Environment Variable (Recommended)**

1. Move the downloaded JSON file to your project root (DO NOT COMMIT THIS):
   ```bash
   mv ~/Downloads/coffee-delivery-app-b29f8-*.json ./service-account-key.json
   ```

2. Add to `.gitignore`:
   ```bash
   echo "service-account-key.json" >> .gitignore
   ```

3. Set environment variable:
   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="./service-account-key.json"
   ```

4. Run the seed script:
   ```bash
   npx tsx src/scripts/seedMenuAdmin.ts
   ```

**Option B: Using gcloud CLI (Alternative)**

1. Install Google Cloud SDK if you haven't:
   ```bash
   # macOS
   brew install google-cloud-sdk
   ```

2. Authenticate:
   ```bash
   gcloud auth application-default login
   ```

3. Run the seed script:
   ```bash
   npx tsx src/scripts/seedMenuAdmin.ts
   ```

## Step 3: Run the Seed Script

Once authenticated (either option A or B):

```bash
npx tsx src/scripts/seedMenuAdmin.ts
```

You should see output like:
```
🌱 Starting menu seed...

✅ Added: Caffe Latte (abc123)
✅ Added: Cappuccino (def456)
...

🎉 Menu seeded successfully!
📊 Total items added: 11
```

## Step 4: Verify in Firebase Console

1. Go to Firestore Database
2. Check the `menu` collection
3. You should see 11 documents

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit `service-account-key.json` to git
- Add it to `.gitignore` immediately
- Keep the key file secure
- This key has admin access to your Firebase project

## Troubleshooting

### Error: "Could not load the default credentials"
- Make sure you've set `GOOGLE_APPLICATION_CREDENTIALS`
- Or run `gcloud auth application-default login`

### Error: "Permission denied"
- Make sure the service account has Firestore permissions
- Check that you're using the correct project ID

### Error: "Project not found"
- Verify the project ID in the script matches your Firebase project

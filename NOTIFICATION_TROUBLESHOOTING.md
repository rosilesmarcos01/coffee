# Notification Permission Troubleshooting

## Quick Fixes

### Option 1: Reset Site Permissions (Chrome)

1. Click the **lock icon** 🔒 or **info icon** ⓘ in the address bar (left of the URL)
2. Click **"Site settings"**
3. Find **"Notifications"** → Change to **"Allow"**
4. **Refresh the page**
5. Try enabling notifications again

### Option 2: Chrome Settings Menu

1. Open Chrome Settings (chrome://settings/)
2. Click **"Privacy and security"** → **"Site settings"**
3. Click **"Notifications"**
4. Under "Not allowed to send notifications", find your site and **remove it**
5. Go back to your app and try again

### Option 3: Manual URL Settings

1. In Chrome, go to: `chrome://settings/content/notifications`
2. Under "Allowed to send notifications", click **"Add"**
3. Paste your site URL (e.g., `https://coffee-delivery-app.vercel.app`)
4. Click **"Add"**
5. Refresh your app and try again

## Check if HTTPS is Working

Open browser console (F12) and check:
- The URL should start with `https://` (not `http://`)
- No security warnings
- Service worker registered successfully

## Test in Incognito/Private Mode

Sometimes cached permissions cause issues:
1. Open your app in **Incognito/Private window** (Cmd+Shift+N in Chrome)
2. Try enabling notifications
3. This will show if it's a permission cache issue

## Alternative: Test Locally First

If production isn't working, test locally:

```bash
cd /Users/marcosrosiles/WORK/MR-INTEL/hola-enfermera/coffee-delivery-app
npm run dev
```

Then open http://localhost:5173 and test notifications there.

## Browser-Specific Instructions

### Safari (macOS)
1. Safari → Settings → Websites → Notifications
2. Find your site and set to "Allow"

### Firefox
1. Click the shield icon in address bar
2. Click "Connection Secure" → "More Information"
3. Permissions tab → Notifications → "Allow"

## Still Not Working?

Check browser console (F12) for specific error messages and share them!

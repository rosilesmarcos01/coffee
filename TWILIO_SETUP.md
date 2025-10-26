# Twilio WhatsApp Notifications Setup Guide

This guide will help you set up WhatsApp notifications using Twilio, which works on ALL devices including iPhone!

## Why Twilio?

✅ Works on iPhone, Android, Desktop - everywhere!
✅ WhatsApp notifications are reliable
✅ SMS fallback option
✅ No need for app permissions
✅ Users already have WhatsApp installed

## Step 1: Create Twilio Account

1. Go to https://www.twilio.com/try-twilio
2. Sign up for a free account
3. Verify your email and phone number
4. You'll get **$15 free credit** (enough for ~1000 WhatsApp messages)

## Step 2: Get Twilio Credentials

After signing up:

1. Go to your Twilio Console: https://console.twilio.com/
2. Find and copy these values:
   - **Account SID** (starts with "AC...")
   - **Auth Token** (click "Show" to reveal)
3. Keep these safe - we'll need them for Firebase Functions

## Step 3: Set Up WhatsApp Sandbox

Twilio provides a WhatsApp Sandbox for testing:

1. In Twilio Console, go to **Messaging** → **Try it out** → **Send a WhatsApp message**
2. You'll see a WhatsApp number (e.g., +1 415 523 8886)
3. Follow the instructions to **join the sandbox**:
   - Send a message with the code to that number from WhatsApp
   - Example: "join <your-code>"
4. Copy the **WhatsApp Sandbox Number** (this is your "from" number)

## Step 4: Initialize Firebase Functions

In your project directory:

\`\`\`bash
cd /Users/marcosrosiles/WORK/MR-INTEL/hola-enfermera/coffee-delivery-app

# Initialize Firebase Functions (if not already done)
firebase init functions
\`\`\`

Select:
- **Language**: TypeScript
- **ESLint**: Yes
- **Install dependencies**: Yes

## Step 5: Install Twilio in Functions

\`\`\`bash
cd functions
npm install twilio
cd ..
\`\`\`

## Step 6: Configure Firebase Functions Environment

Set your Twilio credentials as environment variables:

\`\`\`bash
firebase functions:config:set twilio.account_sid="YOUR_ACCOUNT_SID"
firebase functions:config:set twilio.auth_token="YOUR_AUTH_TOKEN"
firebase functions:config:set twilio.whatsapp_number="+14155238886"
\`\`\`

Replace with your actual values from Step 2 and 3.

## Step 7: Create the Cloud Function

I'll create this file for you in the next step.

## Step 8: Add Phone Number to User Profile

Users need to provide their WhatsApp number in the app settings.

## Step 9: Deploy Functions

\`\`\`bash
firebase deploy --only functions
\`\`\`

## Step 10: Test!

1. Add your WhatsApp number in the app
2. Create a test order
3. Mark it as delivered from admin panel
4. Check WhatsApp for the notification! 🎉

## Costs

### Twilio Free Trial:
- $15 free credit
- ~1,000 WhatsApp messages
- Perfect for personal use

### After Free Trial:
- WhatsApp: ~$0.005 per message (half a cent)
- SMS: ~$0.0075 per message
- Very affordable for personal use!

### For Production (Optional):
To send to non-sandbox numbers (after testing):
1. Apply for WhatsApp Business Account in Twilio
2. Get approved (1-2 weeks)
3. Use production WhatsApp number

For now, the sandbox is perfect for testing and personal use!

## Next Steps

1. ✅ Create Twilio account
2. ✅ Get credentials (SID, Token, WhatsApp number)
3. ⏳ I'll create the Firebase Functions code
4. ⏳ Add phone number field to app
5. ⏳ Deploy and test

Ready to continue? Share your:
- Twilio Account SID
- Auth Token
- WhatsApp Sandbox Number

Or let me know when you've completed steps 1-3!

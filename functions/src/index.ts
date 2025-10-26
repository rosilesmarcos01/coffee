import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as twilio from 'twilio';

admin.initializeApp();

// Twilio client initialization
// These will be set via: firebase functions:config:set twilio.account_sid="..." twilio.auth_token="..." twilio.whatsapp_number="..."
const getTwilioClient = () => {
  const accountSid = functions.config().twilio?.account_sid;
  const authToken = functions.config().twilio?.auth_token;
  
  if (!accountSid || !authToken) {
    console.error('Twilio credentials not configured');
    return null;
  }
  
  return twilio.default(accountSid, authToken);
};

/**
 * Send WhatsApp notification when order status changes to 'delivered'
 */
export const onOrderDelivered = functions.firestore
  .document('orders/{orderId}')
  .onUpdate(async (change, context) => {
    const newData = change.after.data();
    const oldData = change.before.data();
    const orderId = context.params.orderId;

    // Check if status changed to 'delivered'
    if (oldData.status !== 'delivered' && newData.status === 'delivered') {
      console.log(`Order ${orderId} marked as delivered, sending notification...`);

      try {
        // Get Twilio client
        const client = getTwilioClient();
        if (!client) {
          console.error('Twilio client not initialized');
          return null;
        }

        // Get user's phone number from config (hardcoded)
        const userPhone = functions.config().twilio?.user_phone || 'whatsapp:+5214641688215';
        const whatsappNumber = functions.config().twilio?.whatsapp_number || 'whatsapp:+14155238886';
        
        // Format phone number for WhatsApp
        const toNumber = userPhone.startsWith('whatsapp:') 
          ? userPhone 
          : `whatsapp:${userPhone}`;

        // Send WhatsApp message
        const message = await client.messages.create({
          body: `☕ ¡Tu café ha llegado!\n\nTu pedido está listo para recoger. Disfrútalo! 🎉`,
          from: whatsappNumber,
          to: toNumber
        });

        console.log(`WhatsApp message sent: ${message.sid}`);

        // Update order with notification status
        await change.after.ref.update({
          notificationSent: true,
          notificationSentAt: admin.firestore.FieldValue.serverTimestamp(),
          notificationSid: message.sid
        });

        return { success: true, messageSid: message.sid };
      } catch (error) {
        console.error('Error sending WhatsApp notification:', error);
        
        // Log error but don't throw - we don't want to retry indefinitely
        await change.after.ref.update({
          notificationError: error instanceof Error ? error.message : 'Unknown error',
          notificationAttemptedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
      }
    }

    return null;
  });

/**
 * Send WhatsApp notification when a new order is created (for admin)
 */
export const onOrderCreated = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snapshot, context) => {
    const order = snapshot.data();
    const orderId = context.params.orderId;

    console.log(`New order ${orderId} created, notifying admin...`);

    try {
      const client = getTwilioClient();
      if (!client) {
        console.error('Twilio client not initialized');
        return null;
      }

      // Admin phone number - replace with your actual number
      // Format: whatsapp:+1234567890 (include country code)
      const adminPhone = functions.config().twilio?.admin_phone || 'whatsapp:+5215544332211'; // Replace with your number
      const whatsappNumber = functions.config().twilio?.whatsapp_number || 'whatsapp:+14155238886';

      // Format order details
      let orderDetails = '';
      if (order.orderType === 'surprise') {
        orderDetails = '🎲 Sorpresa';
      } else if (order.selectedItems && order.selectedItems.length > 0) {
        // Get menu item names
        const menuItems = await Promise.all(
          order.selectedItems.map(async (itemId: string) => {
            const itemDoc = await admin.firestore().collection('menu').doc(itemId).get();
            return itemDoc.data()?.name || 'Unknown item';
          })
        );
        orderDetails = menuItems.join(', ');
      }

      const message = await client.messages.create({
        body: `☕ Nuevo Pedido\n\n` +
              `📅 Fecha: ${order.shiftDate}\n` +
              `📋 Pedido: ${orderDetails}\n` +
              `⏰ Estado: Pendiente\n\n` +
              `¡Ordena en Rappi y marca como entregado cuando esté listo!`,
        from: whatsappNumber,
        to: adminPhone
      });

      console.log(`Admin notification sent: ${message.sid}`);

      return { success: true, messageSid: message.sid };
    } catch (error) {
      console.error('Error sending admin notification:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  });

/**
 * Manual function to test WhatsApp notifications
 * Can be called from Firebase Console or via HTTP
 */
export const testWhatsApp = functions.https.onCall(async (data, context) => {
  // Verify user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  const { phoneNumber, message } = data;

  if (!phoneNumber) {
    throw new functions.https.HttpsError('invalid-argument', 'Phone number is required');
  }

  try {
    const client = getTwilioClient();
    if (!client) {
      throw new functions.https.HttpsError('failed-precondition', 'Twilio not configured');
    }

    const whatsappNumber = functions.config().twilio?.whatsapp_number || 'whatsapp:+14155238886';
    const toNumber = phoneNumber.startsWith('whatsapp:') ? phoneNumber : `whatsapp:${phoneNumber}`;

    const twilioMessage = await client.messages.create({
      body: message || '☕ Test message from Coffee Delivery App!',
      from: whatsappNumber,
      to: toNumber
    });

    return { 
      success: true, 
      messageSid: twilioMessage.sid,
      message: 'WhatsApp message sent successfully!'
    };
  } catch (error) {
    console.error('Error in testWhatsApp:', error);
    throw new functions.https.HttpsError('internal', error instanceof Error ? error.message : 'Unknown error');
  }
});

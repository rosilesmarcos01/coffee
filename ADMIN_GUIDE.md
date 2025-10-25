# 🔧 Admin Panel Guide

## Accessing the Admin Panel

### Option 1: Direct URL
Navigate to: `http://localhost:5173/admin` (or your deployed URL + `/admin`)

### Option 2: From Dashboard
If logged in as **rosilesmarcos99@gmail.com**, you'll see a settings icon (⚙️) in the header of the dashboard. Click it to access the admin panel.

---

## Features

### 📊 Filter Tabs
- **⏳ Pendientes**: Shows orders that haven't been processed yet (need to be ordered on Rappi)
- **🛒 Ordenados**: Shows orders you've already ordered but haven't marked as delivered
- **📋 Todos**: Shows all orders regardless of status

### 📦 Order Cards
Each order displays:
- **Date**: The shift date (Monday, Wednesday, or Saturday)
- **Status Badge**: Visual indicator of order status
  - ⏳ Pendiente (yellow) - New order, needs action
  - 🛒 Ordenado (blue) - You've ordered it on Rappi
  - 📦 Entregado (purple) - Delivered, waiting for Gabriela to confirm
  - ✅ Confirmado (green) - Gabriela confirmed receipt
- **Created Date/Time**: When Gabriela placed the order
- **Order Type**: 
  - ✨ Sorpresa - Surprise order (you choose what to send)
  - 📋 Seleccionado - She selected specific items
- **Details**: List of items she selected (if not a surprise)

### 🎯 Actions

#### For Pending Orders (⏳):
Two buttons available:
1. **Marcar como Ordenado** - Click after you've ordered on Rappi
2. **Marcar como Entregado** - Skip straight to delivered (if you ordered and delivered immediately)

#### For Ordered Orders (🛒):
One button available:
- **Marcar como Entregado** - Click when you've delivered the coffee to the hospital

#### For Delivered/Confirmed Orders:
No actions needed - shows status text

### 📈 Statistics
At the bottom, you'll see:
- **Total Pedidos**: All orders in the system
- **Pendientes**: Orders waiting for you to process
- **Ordenados**: Orders you've ordered but not yet delivered
- **Confirmados**: Orders completed and confirmed by Gabriela

---

## Typical Workflow

### 1. Gabriela Places Order
- She logs in and creates an order for an upcoming shift
- Order appears in your **Pendientes** tab

### 2. You See the Notification
- Check the admin panel (manually for now)
- See what she ordered or if it's a surprise
- Note the shift date

### 3. Order on Rappi
- Go to Rappi/Uber Eats/etc.
- Order the items
- Click **"Marcar como Ordenado"** in admin panel
- Order moves to **Ordenados** tab

### 4. Deliver the Coffee
- When you deliver to the hospital
- Click **"Marcar como Entregado"**
- Status changes to "Entregado"
- (Future: Gabriela receives push notification)

### 5. Gabriela Confirms
- She sees the delivery button in her dashboard
- Clicks "Confirmar que lo recibí"
- Status changes to "Confirmado"
- Order is complete! ✅

---

## Tips

### Best Practices
- Check the admin panel before each of her shifts (Mon/Wed/Sat)
- Mark orders as "ordenado" immediately after ordering
- Mark as "entregado" as soon as you deliver

### Surprise Orders
When you see "🎲 Sorpresa":
- Choose something you think she'll like
- Consider variety (not the same thing every time)
- Mix coffee + food items

### Multiple Pending Orders
- Orders are sorted by shift date (earliest first)
- You can handle multiple orders at once
- Each order is independent

---

## Keyboard Shortcuts (Future Enhancement)
- Press `P` to filter pending
- Press `O` to filter ordered
- Press `A` to show all

---

## Troubleshooting

### No orders showing?
- Check Firebase Console > Firestore > orders collection
- Verify Gabriela has created orders
- Make sure you're looking at the right filter tab

### Can't update status?
- Check Firebase rules are properly set
- Verify you're authenticated
- Check browser console for errors

### Orders not in correct order?
- They should be sorted by shift date
- Refresh the page if needed

---

## Coming Soon (Phase 6)

- 📧 **Email notifications** when Gabriela places an order
- 📱 **Push notifications** to Gabriela when you deliver
- 🔔 **Browser notifications** for new orders
- 📊 **Analytics dashboard** with charts and trends
- 💬 **Notes field** for special instructions
- 📸 **Photo upload** to confirm delivery

---

**Pro Tip**: Keep the admin panel open in a browser tab and refresh it periodically to check for new orders. Once Phase 6 is implemented, you'll get automatic notifications!

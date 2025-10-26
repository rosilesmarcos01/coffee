# Drink Customization Feature

## Overview
This feature allows users (Gabriela) to customize their drink orders by selecting:
- **Size**: Tall (12 oz), Grande (16 oz), or Venti (20 oz)
- **Milk Type**: Whole, 2%, Nonfat, Almond, Coconut, Oat, Soy, or None

## Implementation Details

### Type Definitions (`src/types/index.ts`)

#### New Types Added:
```typescript
export type DrinkSize = 'tall' | 'grande' | 'venti';
export type MilkType = 'whole' | '2%' | 'nonfat' | 'almond' | 'coconut' | 'oat' | 'soy' | 'none';

export interface OrderItemSelection {
  itemId: string;
  size?: DrinkSize;
  milkType?: MilkType;
}
```

#### Updated MenuItem Interface:
```typescript
export interface MenuItem {
  // ... existing fields
  hasSizeOptions?: boolean; // Indicates if this item has size options
  hasMilkOptions?: boolean; // Indicates if this item has milk options
}
```

#### Updated Order Interface:
```typescript
export interface Order {
  // ... existing fields
  selectedItems?: string[]; // Legacy support - MenuItem IDs only
  itemSelections?: OrderItemSelection[]; // New format with size and milk
}
```

### Menu Page (`src/pages/MenuPage.tsx`)

#### Key Changes:

1. **State Management**:
   - Changed `selectedItems` from `string[]` to `OrderItemSelection[]`
   - Added customization modal state
   - Added temporary state for size and milk selections

2. **Automatic Category Detection**:
   - Drinks in coffee/tea categories automatically get `hasSizeOptions = true`
   - Drinks that typically use milk get `hasMilkOptions = true`
   - Categories:
     - **Size Options**: hot-coffee, iced-coffee, cold-brew, frappuccino-coffee, frappuccino-cream, shaken-espresso, hot-tea, iced-tea, seasonal
     - **Milk Options**: hot-coffee, iced-coffee, cold-brew, frappuccino-coffee, shaken-espresso, seasonal

3. **Customization Modal**:
   - Opens when user clicks on a drink item
   - Shows item name and description
   - Displays size selector (if applicable)
   - Displays milk type selector (if applicable)
   - User can confirm or cancel selection

4. **Order Submission**:
   - Stores both `itemSelections` (new format) and `selectedItems` (legacy format)
   - New format includes customization details
   - Backward compatible with existing orders

### Admin Page (`src/pages/AdminPage.tsx`)

#### Updated Order Display:

The `getOrderDetails()` function now:
1. First checks for `itemSelections` (new format)
2. Displays item name with customizations in parentheses
3. Example: "Caffe Latte (Grande, Leche de avena)"
4. Falls back to `selectedItems` for legacy orders
5. Multiple items separated by bullet points (•)

#### Milk Type Labels:
- `whole` → "Leche entera"
- `2%` → "Leche 2%"
- `nonfat` → "Descremada"
- `almond` → "Almendra"
- `coconut` → "Coco"
- `oat` → "Avena"
- `soy` → "Soya"
- `none` → "Sin leche"

## User Flow

1. User navigates to Menu Page
2. Clicks on a drink item
3. If drink has customization options, modal appears:
   - User selects size (default: Grande)
   - User selects milk type (default: Whole)
4. User clicks "Agregar" to add to order
5. Selected item appears with checkmark
6. User can select multiple items with different customizations
7. User confirms order
8. Admin sees full details including all customizations

## Food Items

Food items (non-drinks):
- Do NOT show customization modal
- Are added directly to order when clicked
- Work exactly as before

## Database Structure

### New Order Document Format:
```javascript
{
  userId: "user123",
  shiftDate: "2025-10-26",
  shiftDay: "saturday",
  orderType: "selected",
  itemSelections: [
    {
      itemId: "item123",
      size: "grande",
      milkType: "oat"
    },
    {
      itemId: "item456",
      size: "venti",
      milkType: "almond"
    }
  ],
  selectedItems: ["item123", "item456"], // Legacy support
  status: "pending",
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## Testing

To test this feature:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Menu page

3. Click on various drink items (coffee, tea, frappuccinos)

4. Verify:
   - Customization modal appears for drinks
   - Size and milk options are selectable
   - Food items are added directly without modal
   - Selected items show checkmark
   - Order submission works correctly

5. Check Admin page:
   - Verify customization details are displayed correctly
   - Verify format: "Item Name (Size, Milk Type)"

## Backward Compatibility

This implementation maintains full backward compatibility:
- Old orders with only `selectedItems` still display correctly
- New orders store both formats
- Admin page handles both old and new formats gracefully
- No migration needed for existing orders

## Future Enhancements

Potential improvements:
- Add extra customization options (shots, syrups, toppings)
- Allow editing selections before submitting
- Save favorite customizations
- Default customization preferences per user
- Price adjustments based on size/customization

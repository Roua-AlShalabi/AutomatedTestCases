import React from 'react';
import { Text, View } from 'react-native';
import { useCart } from './CartProvider';

export const CartBadge = () => {
  const { totalCount } = useCart();
  return (
    <View accessibilityRole="text" accessibilityLabel="cart-badge">
      <Text testID="cart-count">{totalCount}</Text>
    </View>
  );
};
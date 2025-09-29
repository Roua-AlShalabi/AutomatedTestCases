import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCart } from './CartProvider';

export const ProductListItem = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <View>
      <Text>{product.name}</Text>
      <Button title="Add to cart" onPress={() => addToCart(product)} />
    </View>
  );
};
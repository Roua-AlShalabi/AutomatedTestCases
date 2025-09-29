import React, { useMemo, useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

export default function SearchScreen({ products = [] }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(p => p.name.toLowerCase().includes(q));
  }, [query, products]);

  return (
    <View>
      <TextInput
        placeholder="Search products"
        value={query}
        onChangeText={setQuery}
        accessibilityLabel="search-input"
      />
      {results.length === 0 ? (
        <Text testID="no-results">No results</Text>
      ) : (
        <FlatList
          testID="results-list"
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      )}
    </View>
  );
}
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import AddItem from './AddItem';
import {Product} from '../../modules/AllProducts';

import Item from './Item';
const AddProductScreen = () => {
  const [shoppingList, setShoppingList] = useState<Product[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({item}) => (
            <Item name={item.name} price={item.price} image={item.image} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default AddProductScreen;
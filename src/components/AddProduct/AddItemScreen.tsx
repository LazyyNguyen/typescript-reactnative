import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import Header from './Header';
import AddItem, {IItem} from './AddItem';
import Item from './Item';
const AddItemScreen = () => {
  const [shoppingList, setShoppingList] = useState<Array<IItem>>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem
          addHandler={(item) => {
            setShoppingList([...shoppingList, item]);
          }}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({item}) => (
            <Item name={item.name} quantity={item.quantity} />
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
export default AddItemScreen;
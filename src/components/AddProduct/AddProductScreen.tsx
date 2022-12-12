import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import AddItem from './AddItem';
import {useSelector} from 'react-redux';
import { productSelectors} from '../../features/product/product';
import GlobalStyles from '../../styles/GlobalStyles';
import {Product} from '../../modules/AllProducts';


import Item from './Item';
const AddProductScreen: React.FC<Product>= () => {
  const productList = useSelector(productSelectors.selectAll);

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.contentWrapper}>
        <AddItem
        />
        <FlatList
          data={productList}
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
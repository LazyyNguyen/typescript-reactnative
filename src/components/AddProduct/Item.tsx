import React, { useRef } from 'react';
import {View, Text, StyleSheet, FlatList,Image} from 'react-native';
import {Product} from '../../modules/AllProducts';
import FastImage from 'react-native-fast-image';
import GlobalStyles from '../../styles/GlobalStyles';

const Item: React.FC<Product> = ({name, price, image}:Product) => {
  return (
        <View style={styles.item}>
        <FastImage style={{height:60, width: 50,}}source={{ uri: image}}/>
        <Text style={[GlobalStyles.productName,styles.name]}>{name}</Text>
        <Text style={GlobalStyles.productPrice}>${price}</Text>
      </View>
  

      );
    
  
};
const styles = StyleSheet.create({
  item: {
    marginTop:15, marginBottom:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  name:{
    width:200,
  }
});
export default Item;
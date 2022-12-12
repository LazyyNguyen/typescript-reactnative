import React, {useRef, useState, useEffect, FunctionComponent} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
  
} from 'react-native';
import FastImage from 'react-native-fast-image';

import GlobalStyles from '../../styles/GlobalStyles';
import {ProductDetailProps} from '../../components/ProductDetail/ProductDetail'
import ItemCart from './ItemCart';


const Cart = ({navigation, route}: ProductDetailProps) => {
  const {item} = route.params || {};
  return <>
       <ItemCart navigation={navigation}/>

      {item ?
        <ScrollView style={{flexDirection:'row'}}
        showsVerticalScrollIndicator={false}>

      <FastImage style={{ width: 50, height: 50, marginBottom: 20, alignSelf: 'center', }} source={{ uri: item?.image}} />
      <Text>
          {item.name}
      </Text>
      <Text style={GlobalStyles.productPrice}>${item.price}</Text>
      
      </ScrollView> :
      <Text>Don't have any</Text>}
      </>
      

}
      

export default Cart;
export const styles = StyleSheet.create({});

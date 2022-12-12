import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {cartAction, cartSelectors} from '../../features/product/cart';
import {getCart, removeFromCart} from '../../api/product';
import {Product} from '../../modules/AllProducts';
import GlobalStyles from '../../styles/GlobalStyles';
import FastImage from 'react-native-fast-image';

const ItemCart: React.FC = () => {
  const cartList = useSelector(cartSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = useCallback(async () => {
    try {
      const res = await getCart();
      if (res?.data) {
        dispatch(cartAction.addAll(res?.data));
      }
    } catch (error) {
    } finally {
    }
  }, []);

  const onDeleteCart = async (item: Product) => {
    try {
      const res = await removeFromCart(item?.id);
      dispatch(cartAction.removeOne(item?.id));
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };

  return (
    <View >
      <FlatList
      style={{marginBottom: 200}}
        showsVerticalScrollIndicator={false}
        data={cartList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.item}>
              <FastImage
                style={{height: 150, width: 130}}
                source={{uri: item?.image}}
              />
              <View>
                <Text style={GlobalStyles.productName}>{item.name}</Text>
                <Text style={[GlobalStyles.productPrice, styles.price]}>
                  ${item.price}
                </Text>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => onDeleteCart(item)} style={{ height:40,marginTop:10, backgroundColor:'grey',alignItems: 'center', paddingBottom:10, paddingTop:10 }}>
        <Text style={GlobalStyles.buttonText}>Delete</Text>
      </TouchableOpacity>
                
              </View>
            </View>
          );
        }}
      />
      <View style={{
          bottom:200
        }}>

      <TouchableOpacity style={{marginRight:13, marginLeft:13, height:40, backgroundColor:'black',alignItems: 'center', paddingBottom:10, paddingTop:10 }}>
        <Text style={GlobalStyles.buttonText}>CHECK OUT</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.2)',
          padding: 15,
        }}>
        <Image
          style={{height: 20, width: 30, marginRight: 20}}
          source={require('../../../assets/images/fashion/icons/Voucher.png')}
        />
        <Text>Add promo code</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.2)',
          padding: 15,
        }}>
        <Image
          style={{height: 30, width: 30, marginRight: 20}}
          source={require('../../../assets/images/fashion/icons/DoortoDoorDelivery.png')}
        />
        <Text>Delivery</Text>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  itemName: {
    fontWeight: '500',
  },
  quantity: {
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  price: {
    textAlign: 'left',
  },
});
export default ItemCart;

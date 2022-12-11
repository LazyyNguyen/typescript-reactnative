import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import GlobalStyles from '../../styles/GlobalStyles';
import {AllProducts} from '../../screens/Product/AllProducts';
import {cartAction} from '../../features/product/cart';
import {Product} from '../../modules/AllProducts';
import {addToCart} from '../../api/product';




export interface ProductDetailProps {
  navigation: NavigationProp<any, any>;
  route: any;
}

const ProductDetail = ({navigation, route}: ProductDetailProps) => {
  const dispatch = useDispatch();
  const {item} = route.params || {};

  const onAddToCart = async (item: Product) => {
    try {
      const res = await addToCart(item);
      dispatch(cartAction.addOne(item));
      navigation.navigate(`Cart`, {item});
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };

  return (
    <>
      {item ? (
        <View style={GlobalStyles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FastImage
              style={{
                width: 370,
                height: 600,
                marginBottom: 20,
                alignSelf: 'center',
              }}
              source={{uri: item?.image}}
            />
            <Text style={GlobalStyles.productName}>{item.name.toUpperCase()}</Text>
            <Text style={GlobalStyles.productPrice}>$120</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Color</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    backgroundColor: '#0F140D',
                  }}></Text>
                <Text
                  style={{
                    marginLeft: 10,
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    backgroundColor: '#DD8560',
                  }}></Text>
                <Text
                  style={{
                    marginLeft: 10,
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    backgroundColor: '#E1E0DB',
                  }}></Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Size</Text>
                <Text style={{marginLeft: 10, fontWeight: '700'}}>S</Text>
                <Text style={{marginLeft: 10, fontWeight: '700'}}>M</Text>
                <Text style={{marginLeft: 10, fontWeight: '700'}}>L</Text>
              </View>
            </View>
            <TouchableOpacity
              style={GlobalStyles.addItemButton}
              onPress={() => onAddToCart(item)}>
              <Text style={GlobalStyles.buttonText}>Add to basket</Text>
            </TouchableOpacity>

            <Text>MATERIALS</Text>
            <Text>
              To keep your jackets and coats clean, you only need to freshen
              them up and go over them with a cloth or a clothes brush.
            </Text>
            <Text>CARE</Text>
            <Text>
              To keep your jackets and coats clean, you only need to freshen
              them up and go over them with a cloth or a clothes brush. If you
              need to dry clean a garment, look for a dry cleaner that uses
              technologies that are respectful of the environment.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                style={{height: 30, width: 30, marginRight: 15}}
                source={require('../../../assets/images/fashion/icons/do-not-bleach.png')}
              />
              <Text>Do not use bleach</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                style={{height: 30, width: 30, marginRight: 15}}
                source={require('../../../assets/images/fashion/icons/do-not-tumble-dry.png')}
              />
              <Text>Do not tumble dry</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                style={{height: 30, width: 30, marginRight: 15}}
                source={require('../../../assets/images/fashion/icons/no-wash-with-water.png')}
              />
              <Text>Dry clean with tetrachloroethylene</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                style={{height: 30, width: 30, marginRight: 15}}
                source={require('../../../assets/images/fashion/icons/iron.png')}
              />
              <Text>Iron at a maximum of 110ºC/230ºF</Text>
            </View>
            <Text>CARE</Text>

            <View
              style={{
                width: 370,
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../../assets/images/fashion/icons/truck.png')}
              />
              <Text style={{right: 70}}>Fast Car Rate Shipping</Text>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../../assets/images/fashion/icons/down-arrow.png')}
              />
            </View>

            <View
              style={{
                width: 370,
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../../assets/images/fashion/icons/tag.png')}
              />
              <Text style={{right: 105}}>COD Policy</Text>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../../assets/images/fashion/icons/down-arrow.png')}
              />
            </View>

            <View
              style={{
                width: 370,
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../../assets/images/fashion/icons/circle.png')}
              />
              <Text style={{right: 100}}>Return Policy</Text>
              <Image
                style={{height: 20, width: 20}}
                source={require('../../../assets/images/fashion/icons/down-arrow.png')}
              />
            </View>

            <Text style={GlobalStyles.title}>MAY YOU ALSO LIKE</Text>
            <AllProducts navigation={navigation} />
          </ScrollView>
        </View>
      ) : (
        <Text style={GlobalStyles.title}>You need chooce a products</Text>
      )}
    </>
  );
};

export default ProductDetail;
export const styles = StyleSheet.create({});

import React, { useCallback, useState, useEffect, FunctionComponent } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NavigationProp } from "@react-navigation/native";

import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProduct} from '../../api/product';
import {productAction, productSelectors} from '../../features/product/product';
import GlobalStyles from '../../styles/GlobalStyles';

export interface AllProductsProps{
  navigation: NavigationProp<any,any>

}
const { width, height } = Dimensions.get('screen');
export const AllProducts: FunctionComponent<AllProductsProps> = ({navigation}) => {
  
  const productList = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = useCallback(async () => {
    try {
      const res = await getAllProduct();
      if (res?.data) {
        dispatch(productAction.addAll(res?.data));
      }
    } catch (error) {
    } finally {
    }
  }, []);

  return (
    <>
        <FlatList
        style={styles.flatList}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          numColumns={2}
          data={productList}
          decelerationRate={'fast'}
          keyExtractor={(_, index) => index.toString()}

          renderItem={({ item, index }) => {
            const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
            const color = item.id === selectedId ? 'white' : 'black';
            return (
              <TouchableOpacity onPress={() => navigation.navigate(`ProductDetail`,{item})}>
              <View style={styles.products}>
                <FastImage
                  source={{ uri: item?.image }} style={styles.productImg} />
                <Text style={GlobalStyles.productName}>{item.name}</Text>
                <Text style={GlobalStyles.productPrice}>${item.price}</Text>
              </View>
              </TouchableOpacity>

            );
          }}
        />
    </>
  );

}
const styles = StyleSheet.create({
  flatList:{
    bottom:60,
    marginTop: 60,
  },
  products: {
    width: 175,

  },
  productImg: {
    height: 200,
  },
  itemStyle: {
    padding: 10,
  },

});


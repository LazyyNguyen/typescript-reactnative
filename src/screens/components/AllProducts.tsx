import React, { useRef, useState, useEffect, FunctionComponent } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';

import { Product } from '../../modules/AllProducts';
import { AllProductsServices } from '../../services/AllProductsServices';
import FastImage from 'react-native-fast-image';

interface IState {
  loading: boolean,
  products: Product[],
  errorMsg: string
}
const { width, height } = Dimensions.get('screen');
const [selectedId, setSelectedId] = useState(null);
const AllProducts: FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    products: [] as Product[],
    errorMsg: ''
  });

  useEffect(() => {

    setState({ ...state, loading: true })
    AllProductsServices.getAllProducts()
      .then(res => setState({
        ...state,
        loading: false,
        products: res.data
      }))
      .catch(err => setState({
        ...state, loading: false, errorMsg: err.message
      }))
  }, []);
  // console.log('state', { ...state });

  // const {loading,users,errorMsg} = state


  return (
    <>
        {state.errorMsg && <Text>Error</Text>}
        <ScrollView>
        <FlatList
        style={style.flatList}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          // numColumns={2}
          horizontal
          data={state.products}
          // showsHorizontalScrollIndicator={false}
          // snapToInterval={width}
          decelerationRate={'fast'}
          keyExtractor={(_, index) => index.toString()}

          renderItem={({ item, index }) => {
            const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
            const color = item.id === selectedId ? 'white' : 'black';
            return (
              <View style={style.products}>
                <FastImage
                  source={{ uri: item?.image }} style={style.productImg} />
                <Text style={style.productName}>{item.name}</Text>
                <Text style={style.productPrice}>${item.price}</Text>
              </View>

            );
          }}
        />
        </ScrollView>
    </>
  );

}
const style = StyleSheet.create({
  flatList:{
  },
  products: {
    width: 175,

  },
  productImg: {
    height: 200,
  },
  productPrice: {
    textAlign: 'center',
    color: '#DDAC55',
    fontWeight: 'bold',
    marginBottom: 15,

  },
  productName: {
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },


});

export default AllProducts;
import React, { useEffect,useState} from 'react';
import {View, Text, StyleSheet, FlatList,Image} from 'react-native';
import {Product} from '../../modules/AllProducts';
import { AllProductsServices } from '../../services/AllProductsServices';
import { IState } from '../../screens/components/AllProducts';

const ItemCart: React.FC = () => {
  const[listProduct, setListProduct] = useState<IState>({
    loading: false,
    products: [] as Product[],
    errorMsg: '',
  })
  useEffect(() => {
    setListProduct({ ...listProduct, loading: true })
    AllProductsServices.showCart()
      .then(res => setListProduct({
        ...listProduct,
        loading: false,
        products: res.data
      }))
      .catch(err => setListProduct({
        ...listProduct, loading: false, errorMsg: err.message
      }))
  }, []);
  return (
    <FlatList
    data={listProduct.products}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item, index }) => {
      return (
        <View style={styles.item}>
        <Image style={{height:80, width: 50,}}source={{ uri: item?.image}}/>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.quantity}>${item.price}</Text>
        <Text style={styles.quantity}>${item.quantity}</Text>

      </View>
  

      );
    }}
    />
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
});
export default ItemCart;
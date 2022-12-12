import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {cartAction, cartSelectors} from '../../features/product/cart';
import {getCart, removeFromCart} from '../../api/product';
import {Product} from '../../modules/AllProducts';
import GlobalStyles from '../../styles/GlobalStyles';
import FastImage from 'react-native-fast-image';
import {AllProductsProps} from '../Product/AllProducts';

const Checkout: React.FC<AllProductsProps> = ({navigation}) => {
  const cartList = useSelector(cartSelectors.selectAll);
  const totalPrice = cartList.reduce((sum, item) => sum + item.price, 0);
  const totalProduct = cartList.length;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const backToHome = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Home');
  };
  const submitToPayment = (item: Product) => {
      try {
        setModalVisible(!modalVisible)
        dispatch(cartAction.removeAll());
      } catch (error) {
        console.log('🤟💋   onAddToCart   error', error);
      }
    };

  return (
    <View>
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
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          bottom: 200,
          marginRight: 13,
          marginLeft: 13,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.total]}>Total price:</Text>
          <Text style={[GlobalStyles.productPrice, styles.total]}>
            ${Math.floor(totalPrice)}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.total]}>Total products:</Text>
          <Text style={[styles.total]}>{totalProduct}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            height: 40,
            backgroundColor: 'black',
            alignItems: 'center',
            paddingBottom: 10,
            paddingTop: 10,
          }}>
          <Text style={GlobalStyles.buttonText}>PAYMENT</Text>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>PAYMENT SUCCESS!</Text>
                <FastImage
                  source={require('../../../assets/images/fashion/icons/Group270.png')}
                />
                <Text style={styles.modalText}>Your payment was success</Text>
                <Text style={styles.modalText}>Payment ID 15263541</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <FastImage
                    source={require('../../../assets/images/fashion/icons/Disappointed.png')}
                  />
                  <FastImage
                    source={require('../../../assets/images/fashion/icons/Happy.png')}
                  />
                  <FastImage
                    source={require('../../../assets/images/fashion/icons/InLove.png')}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Pressable
                    onPress={submitToPayment}
                    style={styles.button}>
                    <Text>Submit</Text>
                  </Pressable>
                  <Pressable onPress={backToHome} style={styles.button}>
                    <Text>Back to home</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
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
  total: {
    fontSize: 23,
    fontWeight: '500',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Checkout;

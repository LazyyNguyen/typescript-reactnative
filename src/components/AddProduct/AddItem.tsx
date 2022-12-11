import React, {useState,useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import GlobalStyles from '../../styles/GlobalStyles';
import {productAction} from '../../features/product/product';
import {Product} from '../../modules/AllProducts';
import {addToProduct} from '../../api/product';


const AddItem: React.FC<Product> = () => {


  const [item, setItem] = useState<Product>({
    name: '',
    price: 0 as number,
    image: '',
  });
  const dispatch = useDispatch();
  const onAddToProduct = async (item: Product) => {
    try {
      const res = await addToProduct(item);
      dispatch(productAction.addOne(item));
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };

  const addItem = () => {
    if (!item) {
      Alert.alert('No Item!', 'You need to enter an item');
    } else {
      onAddToProduct(item)
    }
  };

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={item.name}
          onChangeText={text => setItem({...item, name: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter price"
          keyboardType="numeric"
          value={String(item.price)}
          onChangeText={text => setItem({...item, price:Number(text)})}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter image"
          value={item.image}
          onChangeText={text => setItem({...item, image: text})}
        />
        <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddItem;

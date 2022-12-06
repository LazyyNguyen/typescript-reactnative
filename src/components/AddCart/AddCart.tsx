import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { AllProductsServices } from '../../services/AllProductsServices';
import {Product} from '../../modules/AllProducts';

interface Props {
  setShoppingList: React.Dispatch<React.SetStateAction<Product[]>>;
  shoppingList: Product[];
}
const AddCart: React.FC<Props> = ({shoppingList, setShoppingList}) => {
  const [item, setItem] = useState<Product>({
    name: '',
    price: 0 as number,
    image: '',
  });
  const addItem = () => {
    if (!item) {
      Alert.alert('No Item!', 'You need to enter an item');
    } else {
      setShoppingList([
        ...shoppingList,
        {
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image,
        },
      ]);
      AllProductsServices.addCart(item)
      setItem({
        quantity: 1,
        name: '',
        price: 1,
        image: '',
      });
    }
  };
  return (
    <View>
      
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
export default AddCart;

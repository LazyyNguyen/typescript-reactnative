import React, {
  useCallback,
  useState,
  useEffect,
  FunctionComponent,
} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Alert,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {getBlogList} from '../../api/product';
import {blogListAction} from '../../features/product/blogList';
import {Product} from '../../modules/AllProducts';
import GlobalStyles from '../../styles/GlobalStyles';
import { AllProductsProps } from '../Product/AllProducts';

const {width, height} = Dimensions.get('screen');
const Search: FunctionComponent<AllProductsProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([
    {
      id: '',
      name: '',
      image: '',
      price:0
    },
  ]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = useCallback(async () => {
    try {
      const res = await getBlogList();
      if (res?.data) {
        dispatch(blogListAction.addAll(res?.data));
        setFilteredDataSource(res?.data);
        setMasterDataSource(res?.data);
      }
    } catch (error) {
    } finally {
    }
  }, []);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = masterDataSource.filter((item: Product) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item: Product) => {
    Alert.alert('Id : ' + item.id + ' name : ' + item.name);
  };

  return (
    <>
      <View style={GlobalStyles.container}>
        <ScrollView>
          <SafeAreaView style={{flex: 1}}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
            />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={({item, index}) => {
                return (
                  <>
                  <TouchableOpacity onPress={() => navigation.navigate(`ProductDetail`,{item})}>
                    <Text
                      style={styles.itemStyle}
                      onPress={() => getItem(item)}>
                      {item?.id}
                      {'. '}
                      {item?.name.toUpperCase()}
                    </Text>
                    <Text style={[GlobalStyles.productPrice,styles.price]}>${item.price}</Text>
                    <FastImage
                      style={[GlobalStyles.productImg]}
                      source={{uri: item?.image}}
                    />
                    </TouchableOpacity>
                  </>
                );
              }}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  flatList: {flexGrow: 0,
  marginBottom:60},
  imageContainer: {
    position: 'relative',
    width,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    position: 'absolute',
    color: '#FFFF',
    textAlign: 'left',
    left: 40,
    bottom: 40,
    fontWeight: '700',
  },
  itemStyle: {
    padding: 10,
    fontWeight: '700',
  },

  textInputStyle: {
    height: 40,
    width: 370,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  price: {
    textAlign:'left',
  padding:10  }
});

export default Search;

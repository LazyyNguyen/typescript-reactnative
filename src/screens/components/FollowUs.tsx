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
  Image,
  Text,
  Animated,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import {getAuthor} from '../../api/product';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyles from '../../styles/GlobalStyles';
import {authorAction, authorSelectors} from '../../features/product/author';
import {ScrollView} from 'react-native-gesture-handler';

interface postProps {
  id: any;
  title: string;
}

const {width, height} = Dimensions.get('screen');
const FollowUs: FunctionComponent = () => {
  const authorList = useSelector(authorSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = useCallback(async () => {
    try {
      const res = await getAuthor();
      if (res?.data) {
        dispatch(authorAction.addAll(res?.data));
      }
    } catch (error) {
    } finally {
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={GlobalStyles.title}>Follow Us</Text>
        <Image
          style={{marginTop: 10}}
          source={require('../../../assets/images/fashion/icons/Instagram.png')}
        />

        <Animated.FlatList
          style={styles.flatList}
          data={authorList}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate={'fast'}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.imageContainer}>
                <FastImage
                  source={{uri: item?.image}}
                  style={{height: 350, width: 350}}
                />
                <Text style={styles.name}>@{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {flexGrow: 0},
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
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default FollowUs;

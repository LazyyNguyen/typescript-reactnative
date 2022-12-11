import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {AllProducts} from '../Product/AllProducts';
import FollowUs from '../components/FollowUs';
import GlobalStyles from '../../styles/GlobalStyles';

export interface HomepageProps {
  navigation: NavigationProp<any, any>;
}
const Homepage = ({navigation}: HomepageProps) => {
  return (
    <View style={GlobalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <Image
            source={require('../../../assets/images/fashion/images/model1.png')}
            style={styles.bannerImage}
          />
          <Image
            source={require('../../../assets/images/fashion/images/BannerTitle.png')}
            style={styles.bannerTitle}
          />
          <TouchableOpacity
            style={styles.bannerButton}
            onPress={() => navigation.navigate(`Search`)}>
            <Text style={{fontSize: 16, textAlign: 'center'}}>
              Explore collection
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={GlobalStyles.title}>New Arrival</Text>
          <Image
            style={{marginBottom: 20, alignSelf: 'center'}}
            source={require('../../../assets/images/fashion/images/Devider.png')}
          />
          <View style={styles.newArrivalTabs}>
            <Text>All</Text>
            <Text>Apparel</Text>
            <Text>Dress</Text>
            <Text>TShirt</Text>
            <Text>Bag</Text>
          </View>
            <ScrollView style={{height: 560}}>
              <AllProducts navigation={navigation} />
            </ScrollView>

          <View>
            <TouchableOpacity
              style={styles.emore}
              onPress={() => navigation.navigate(`AllProducts`)}>
              <Text style={{fontSize: 16}}>Explore more</Text>
              <Image
                style={styles.forwardArrow}
                source={require('../../../assets/images/fashion/icons/ForwardArrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{width: 330, marginTop: 15, marginLeft: 18}}
            source={require('../../../assets/images/fashion/images/Group269.png')}
          />
        </View>
        <View style={styles.collection}>
          <Text style={GlobalStyles.title}>Collection</Text>
          <Image
            source={require('../../../assets/images/fashion/images/collect.png')}
          />
        </View>
        <View style={{}}>
          <Image
            style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}
            source={require('../../../assets/images/fashion/logo.png')}
          />
          <Text style={{alignSelf: 'center', textAlign: 'center'}}>
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive.
          </Text>
          <Image
            style={{marginBottom: 20, alignSelf: 'center'}}
            source={require('../../../assets/images/fashion/images/Devider.png')}
          />
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <View style={{justifyContent: 'space-around', width: 160}}>
              <Image
                style={{marginBottom: 20, alignSelf: 'center'}}
                source={require('../../../assets/images/fashion/icons/MiroodlesSticker.png')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginBottom: 20,
                }}>
                Fast shipping. Free on orders over $25.
              </Text>
              <Image
                style={{marginBottom: 20, alignSelf: 'center'}}
                source={require('../../../assets/images/fashion/icons/MiroodlesSticker2.png')}
              />
              <Text style={{alignSelf: 'center', textAlign: 'center'}}>
                Sustainable process from start to finish.
              </Text>
            </View>
            <View style={{justifyContent: 'space-around', width: 160}}>
              <Image
                style={{marginBottom: 20, alignSelf: 'center'}}
                source={require('../../../assets/images/fashion/icons/MiroodlesSticker3.png')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginBottom: 20,
                }}>
                Unique designs and high-quality materials.
              </Text>
              <Image
                style={{marginBottom: 20, alignSelf: 'center'}}
                source={require('../../../assets/images/fashion/icons/MiroodlesSticker4.png')}
              />
              <Text style={{alignSelf: 'center', textAlign: 'center'}}>
                Fast shipping. Free on orders over $25.
              </Text>
            </View>
          </View>
        </View>
        <FollowUs />
      </ScrollView>
    </View>
  );
};
export const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

  banner: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 25,
  },
  bannerImage: {
    width: 370,
  },
  bannerTitle: {
    position: 'absolute',
    marginTop: 250,
  },
  bannerButton: {
    position: 'absolute',
    backgroundColor: '#DDDDDD',
    width: 240,
    padding: 16,
    marginTop: 500,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#111',
    opacity: 0.5,
  },
  newArrivalTabs: {
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    // alignItems:'center'
  },

  emore: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  forwardArrow: {
    marginTop: 2,
    marginLeft: 5,
  },
  collection: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Homepage;

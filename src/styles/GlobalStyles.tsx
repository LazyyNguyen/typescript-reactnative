import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  description: {},
  addItemButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#111',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
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
  productImg: {
    marginBottom:10,
    size:'cover',
    width: 370,
    height:600,
    alignSelf: 'center',
  },
  price:{
    textAlign:'left',
  },
});

import {combineReducers} from '@reduxjs/toolkit';
import cart from './product/cart';
import product from './product/product';
import author from './product/author';
import blogList from './product/blogList';

//Redux state is typically organized into "slices", defined by the reducers that are passed to combineReducers
export const allReducers = combineReducers({
  cart: cart,
  product: product,
  author: author,
  blogList: blogList
});

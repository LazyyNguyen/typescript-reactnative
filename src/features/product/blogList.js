import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const blogList = createEntityAdapter();

const blogListSlice = createSlice({
  name: 'blogList',
  initialState: blogList.getInitialState(),
  reducers: {
    addAll: blogList.addMany,
    removeAll: blogList.removeAll,
    addOne: blogList.addOne,
    updateOne: blogList.updateOne,
    removeOne: blogList.removeOne,
  },
});

export const blogListSelectors = blogList.getSelectors(state => state.blogList);
export const {reducer, actions: blogListAction} = blogListSlice;
export default reducer;

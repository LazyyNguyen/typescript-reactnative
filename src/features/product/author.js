import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const author = createEntityAdapter();

const authorSlice = createSlice({
  name: 'author',
  initialState: author.getInitialState(),
  reducers: {
    addAll: author.addMany,
    removeAll: author.removeAll,
    addOne: author.addOne,
    updateOne: author.updateOne,
    removeOne: author.removeOne,
  },
});

export const authorSelectors = author.getSelectors(state => state.author);
export const {reducer, actions: authorAction} = authorSlice;
export default reducer;

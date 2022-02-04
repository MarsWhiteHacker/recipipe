import { createSlice } from '@reduxjs/toolkit';

import { inputsFocusStateReducer } from './reducers';

export type InputsState = {
  isFocused: boolean;
};

const initialState: InputsState = {
  isFocused: false,
};

export const counterSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    ...inputsFocusStateReducer,
  },
});

export default counterSlice.reducer;

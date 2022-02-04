import { PayloadAction } from '@reduxjs/toolkit';

import { InputsState } from '..';

export const inputsFocusStateReducer = {
  inputsFocusStateOn(state: InputsState, action: PayloadAction<boolean>) {
    state.isFocused = action.payload;
  },
};

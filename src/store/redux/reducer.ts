import { combineReducers } from '@reduxjs/toolkit';
import inputsReducer from './inputs/inputs.reducer';

const reducer = combineReducers({
  inputs: inputsReducer,
});

export default reducer;

import { AppState } from '~store/redux';

const isFocused = (state: AppState): boolean => state.inputs.isFocused;

export default {
  isFocused,
};

import { createSlice } from '@reduxjs/toolkit';

type mobileMenuState = {
  isOpen: boolean;
}

const initialState: mobileMenuState = {
  isOpen: false
};

const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    mobileMenuToggler(state) {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { mobileMenuToggler } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;

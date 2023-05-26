import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type screenSizeState = {
  isMobile: boolean;
}

const initialState: screenSizeState = {
  isMobile: true
};

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize(state, action: PayloadAction<number>) {
      if (action.payload < 700) {
        state.isMobile = true;
      } else {
        state.isMobile = false;
      }
    }
  }
});

export const { setScreenSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;

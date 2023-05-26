import { configureStore } from '@reduxjs/toolkit';
import mobileMenuReducer from './mobileMenuSlice';
import screenSizeReducer from './screenSizeSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    screenSize: screenSizeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

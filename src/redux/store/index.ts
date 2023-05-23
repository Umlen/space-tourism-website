import { configureStore } from '@reduxjs/toolkit';
import mobileMenuReducer from './mobileMenuSlice';

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

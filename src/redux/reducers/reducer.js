import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from '../contactsSlice';
import { filterSlice } from '../sliceFilter';
import { authSlice } from 'redux/auth/authSlice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedRootReducer = persistReducer(persistConfig, authSlice.reducer);

export const rootReducer = combineReducers({
  user: persistedRootReducer,
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

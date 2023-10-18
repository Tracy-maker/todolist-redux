

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Other store configuration options (middleware, devTools, etc.) can go here
});

export default store;







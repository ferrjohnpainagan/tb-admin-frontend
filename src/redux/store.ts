import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import authSlice from "./auth/slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export default store;

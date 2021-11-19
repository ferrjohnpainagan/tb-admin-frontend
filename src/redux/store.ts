import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import history from "../services/history";

import authSlice from "./auth/slice";
import bookingSlice from "./booking/slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth: authSlice.reducer,
    bookings: bookingSlice.reducer,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middlewares),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export default store;

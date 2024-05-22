import { configureStore } from "@reduxjs/toolkit";
import { rowsReducer } from "../entities/rowList";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "rowList",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rowsReducer);

export const store = configureStore({
  reducer: {
    rowList: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

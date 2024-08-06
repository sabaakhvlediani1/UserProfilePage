import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toastNotification from "./slices/toastNotificationSlice";
import { authApi } from "./services/AuthApi";
import userSlice from "./slices/userSlice";
import { cardApi } from "./services/CardApi";
import { userApi } from "./services/UserApi";


const persistConfig = {
  key: "user",
  storage,
  version: 1,
  whitelist: ["token", "isAuthorized"],
};
const apiReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [cardApi.reducerPath]: cardApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userSlice),
  toast: toastNotification,
  ...apiReducers,
});

const apiMiddlewares = [
  authApi.middleware,
  cardApi.middleware,
  userApi.middleware,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...apiMiddlewares),
});

export const persistor = persistStore(store);
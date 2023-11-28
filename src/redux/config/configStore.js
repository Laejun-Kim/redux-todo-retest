import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  todos,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;

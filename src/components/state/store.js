import {combineReducers, legacy_createStore as createStore} from 'redux';
import { bagReducer } from './reducers/bagReducer';
import { itemReducer } from './reducers/itemReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    item:itemReducer,
    bag:bagReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer);

export const persistor = persistStore(store)
export default store;
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import userReducer from './user-reducer/user-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelise: ['user'] 
}

const rootReducer = combineReducers({
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer )
import { reducers } from '@app/providers/store/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	 
	whitelist: [],
};

export const persistedReducer = persistReducer(persistConfig, reducers);
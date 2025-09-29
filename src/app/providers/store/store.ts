import { persistedReducer } from '@app/providers/store/persistConfig';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(),
});

export default store;

export const persistor = persistStore(store);
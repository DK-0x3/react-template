import sessionSlice from '@entities/session/model/slice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducers = combineReducers({
	session: sessionSlice,
});
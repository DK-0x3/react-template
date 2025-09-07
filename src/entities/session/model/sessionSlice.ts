// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionState } from './types/SessionState';

const initialState: SessionState = {
	sessionId: null,
	lastActivity: Date.now(),
};

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setSessionData: (state, action: PayloadAction<SessionState>) => {
			state.sessionId = action.payload.sessionId;
			state.lastActivity = action.payload.lastActivity;
		},
		clearSessionData: (state) => {
			state.sessionId = null;
			state.lastActivity = null;
		},
		setSessionLastActivity: (state, action: PayloadAction<number>) => {
			state.lastActivity = action.payload;
		}
	},
});

export const { setSessionData, clearSessionData, setSessionLastActivity } = sessionSlice.actions;
export default sessionSlice.reducer;
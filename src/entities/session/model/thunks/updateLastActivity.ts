import { AppThunk } from '@shared/lib/store/types/AppThunk';
import { StorageKeyType } from '@shared/types/LocalStorageKey';

import { setSessionData } from '../slice';

export const updateLastActivity = (): AppThunk => (dispatch, getState) => {
	const state = getState().session;
	if (!state) return;

	const updated = { ...state, lastActivity: Date.now() };
	dispatch(setSessionData(updated));
	localStorage.setItem(StorageKeyType.SESSION, JSON.stringify(updated));
};
import { AppThunk } from '@shared/lib/store/types/AppThunk';
import { StorageKeyType } from '@shared/types/LocalStorageKey';

import { clearSessionData } from '../slice';

export const resetSession = (): AppThunk => (dispatch) => {
	dispatch(clearSessionData());
	localStorage.removeItem(StorageKeyType.SESSION);
};
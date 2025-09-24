import { AppThunk } from '@shared/lib/store/types/AppThunk';
import { StorageKeyType } from '@shared/types/LocalStorageKey';

import { setSessionData } from '../slice';
import { SessionState } from '../types/SessionState';

/**
 * Инициализирует сессию каждый раз при обновлении страницы.
 */
export const initSession = (): AppThunk => (dispatch) => {
	const now = Date.now();

	// Если сессия не найдена или устарела — создаём новую
	const newSessionId = `session-${now}`;
	const newSession: SessionState = {
		sessionId: newSessionId,
		lastActivity: now,
	};

	dispatch(setSessionData(newSession));
	localStorage.setItem(StorageKeyType.SESSION, JSON.stringify(newSession));
};
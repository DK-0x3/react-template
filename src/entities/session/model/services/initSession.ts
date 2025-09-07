import { SessionState } from '../types/SessionState';
import { setSessionData } from '../sessionSlice';
import { StorageKeyType } from '../../../../shared/types/LocalStorageKey';
import { AppThunk } from '../../../../app/store/store';

/**
 * Инициализтрует сессию каждый раз при обновлении страницы.
 * Закоментированный код это логика сессии для сохранения ее на 10 минут.
 */
export const initSession = (): AppThunk => (dispatch) => {
	// const session = localStorage.getItem(StorageKeyType.SESSION);
	const now = Date.now();
	//
	// if (session) {
	// 	try {
	// 		const data: ISessionState = JSON.parse(session);
	// 		const tenMinutes = 10 * 60 * 1000;
	//
	// 		if (data.sessionId && data.language) {
	// 			const last = data.lastActivity ?? 0;
	//
	// 			if (now - last <= tenMinutes) {
	// 				console.log('найдена валидная сессия', data);
	// 				dispatch(setSessionData({ ...data, lastActivity: now }));
	// 				localStorage.setItem(StorageKeyType.SESSION, JSON.stringify({ ...data, lastActivity: now }));
	// 				return;
	// 			}
	//
	// 			console.log('сессия устарела');
	// 			localStorage.removeItem(StorageKeyType.SESSION);
	// 		}
	// 	} catch (e) {
	// 		console.warn('Ошибка при чтении session из localStorage');
	// 		localStorage.removeItem(StorageKeyType.SESSION);
	// 	}
	// }

	// Если сессия не найдена или устарела — создаём новую
	const newSessionId = `session-${now}`;
	const newSession: SessionState = {
		sessionId: newSessionId,
		lastActivity: now,
	};

	dispatch(setSessionData(newSession));
	localStorage.setItem(StorageKeyType.SESSION, JSON.stringify(newSession));
	// console.log('создана новая сессия', newSession);
};
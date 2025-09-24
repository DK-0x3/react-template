import { RootState } from '@shared/lib/store/types/RootState';

export const getSessionId = (state: RootState) => state.session.sessionId;

export const getSessionObject = (state: RootState) => state.session;
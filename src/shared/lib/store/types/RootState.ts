import store from '@app/providers/store/store';

export type RootState = ReturnType<typeof store.getState>;
import store, { persistor } from '@app/providers/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter from './providers/router/AppRouter';
import styles from './styles/App.module.scss';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<div className={styles.App}>
							<AppRouter/>
						</div>
					</BrowserRouter>
					<Toaster position="top-center" />
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;

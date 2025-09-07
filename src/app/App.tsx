import styles from './styles/App.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from '../widgets/modal/model/ModalContext';
import { Modal } from '../widgets/modal/ui/Modal';
import AppRouter from './providers/router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './styles/globalVariables.scss';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ModalProvider>
				<BrowserRouter>
					<div className={styles.App}>
						<AppRouter/>
						<Modal/>
					</div>
				</BrowserRouter>
			</ModalProvider>
			<Toaster position="top-center" />
		</QueryClientProvider>
	);
};

export default App;

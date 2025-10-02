import { AppLayout } from '@app/ui/AppLayout';
import MainPage from '@pages/main/MainPage';
import NotFoundPage from '@pages/not-found/NotFoundPage';
import ROUTES from '@shared/config/routes';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<AppLayout/>}>
				<Route index element={<MainPage/>}/>
				<Route path={ROUTES.NOT_FOUND} element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	);
};

export default AppRouter;
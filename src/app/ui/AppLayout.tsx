import { Navbar } from '@widgets/navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet/>
		</>
	);
};
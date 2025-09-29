import './app/styles/index.scss';
import 'react-loading-skeleton/dist/skeleton.css';

import { createRoot } from 'react-dom/client';

import App from './app/App';

createRoot(document.getElementById('root')!).render(
	<App />
);

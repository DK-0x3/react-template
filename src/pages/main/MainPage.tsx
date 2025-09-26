import { StackCard } from '@features/stack-card/ui/StackCard';
import ReactLogo from '@shared/assets/icons/react.svg';
import ReduxLogo from '@shared/assets/icons/redux.svg';
import ViteLogo from '@shared/assets/icons/vite.svg';
import i18n from '@shared/configs/i18next';
import classNames from 'classnames';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const { t } = useTranslation();

	const handleLanguage = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
		toast(t('Переведено на Язык'), {
			duration: 1000,
			style: {
				borderRadius: '10px',
				background: '#333',
				color: '#fff',
			},
		});
	};

	return (
		<div className={styles.wrapper}>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<ViteLogo className={styles.Logo}/>
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<ReactLogo className={classNames(styles.Logo, styles.React)}/>
				</a>
				<a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">
					<ReduxLogo className={classNames(styles.Logo, styles.Redux)}/>
				</a>
			</div>

			<StackCard/>
			
			<button onClick={handleLanguage}>{t('Короткий язык')}</button>

			<a href="https://github.com/DK-0x3" className={styles.Copyright}>©DK-0x3</a>
		</div>
	);
};

export default MainPage;
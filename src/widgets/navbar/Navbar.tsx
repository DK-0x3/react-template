import i18n from '@shared/configs/i18next';
import { SmartIcon } from '@shared/ui/smart-icon/SmartIcon';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

export const Navbar = () => {
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
			<a
				className={styles.logoAndTitle}
				href="https://github.com/DK-0x3/react-template"
			>
				<SmartIcon iconName="logo" className={styles.logo}/>
				React Template
			</a>

			<button onClick={handleLanguage}>{t('Короткий язык')}</button>
		</div>
	);
};
import ROUTES from '@shared/configs/routes';
import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
	const { t } = useTranslation();
    
	return (
		<div className={styles.wrapper}>
			<h1>{t('Ошибка, страница не найдена')}</h1>
			<a href={ROUTES.HOME}>{t('На главную')}</a>
		</div>
	);
};

export default NotFoundPage;
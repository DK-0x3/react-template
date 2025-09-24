import ROUTES from '@shared/configs/routes';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
	const { t } = useTranslation();
    
	return (
		<div>
			<h1>{t('Ошибка, страница не найдена')}</h1>
			<a href={ROUTES.HOME}>{t('На главную')}</a>
		</div>
	);
};

export default NotFoundPage;
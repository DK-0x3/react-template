import reactLogo from '../../shared/assets/svg/react.svg';
import viteLogo from '../../shared/assets/svg/vite.svg';
import reduxLogo from '../../shared/assets/svg/redux.svg';
import { useTranslation } from 'react-i18next';
import i18n from '../../app/configs/i18next/i18next';
import styles from './MainPage.module.scss';
import classNames from 'classnames';
import { Tooltip } from '../../shared/ui/tooltip/Tooltip';
import toast from 'react-hot-toast';

const MainPage = () => {
	const { t } = useTranslation();

	const handleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
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
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className={styles.Logo} alt="Vite logo"/>
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className={classNames(styles.Logo, styles.React)} alt="React logo"/>
				</a>
				<a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">
					<img src={reduxLogo} className={classNames(styles.Logo, styles.Redux)} alt="Redux logo"/>
				</a>
			</div>
			{ }
			<h1>{t('Шаблон')} React</h1>

			<div className={styles.Card}>
				<h2>{t('⚡️ Технологический стек')}</h2>
				<ul>
					<li>
						<a href='https://react.dev/blog/2024/12/05/react-19' className={styles.Badge}>
							React 19
						</a>
					</li>
					<li>
						<a href='https://vite.dev/blog/announcing-vite6' className={styles.Badge}>
							Vite 6
						</a>
					</li>
					<li>
						<a href='https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html'
							className={styles.Badge}
						>
							TypeScript 5
						</a>
					</li>
					<li>
						<a href='https://redux-toolkit.js.org/' className={styles.Badge}>
							Redux Toolkit
						</a>
					</li>
					<li>
						<a href='https://reactrouter.com/home' className={styles.Badge}>
							React Router 7
						</a>
					</li>
					<li>
						<a href='https://react.i18next.com/' className={styles.Badge}>
							i18next
						</a>
					</li>
					<li>
						<a href='https://react-hot-toast.vercel.app/docs' className={styles.Badge}>
							Hot Toast
						</a>
					</li>
					<li>
						<a
							href='https://manuals.muthu.co/posts/javascript-libraries-and-functions/classnames.html'
							className={styles.Badge}
						>
							classnames
						</a>
					</li>
				</ul>

				<h3>{t('🔧 Инструменты разработки')}</h3>
				<ul className={styles.Tools}>
					<li>
						<a
							href='https://eslint.org/docs/latest/'
							className={styles.Chip}
						>
							ESLint
						</a>
						<code>react</code>
						<code>i18next</code>
						<code>optimize-regex</code>
						<code>import</code>
					</li>
					<li>
						<a
							href='https://typescript-eslint.io/'
							className={styles.Chip}>
							TS ESLint
						</a>
						{t('Интеграция ESLint с TypeScript')}
					</li>
					<li>
						<a
							href='https://sass-lang.com/'
							className={styles.Chip}
						>
							Sass
						</a>
						{t('Стилизация на SCSS')}
					</li>
				</ul>
			</div>

			<Tooltip content={t('Переводы I18Next')} placement='Bottom' delay={500}>
				<button onClick={handleLanguage}>{t('Короткий язык')}</button>
			</Tooltip>

			<a href='https://github.com/DK-0x3' className={styles.Copyright}>©DK-0x3</a>
		</>
	);
};

export default MainPage;
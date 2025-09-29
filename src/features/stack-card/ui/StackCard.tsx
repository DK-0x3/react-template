import { EslintTooltip } from '@features/stack-card/ui/eslint-tooltip/EslintTooltip';
import { Badge, BadgeProps } from '@shared/ui/badge/Badge';
import { Trans, useTranslation } from 'react-i18next';

import styles from './StackCard.module.scss';

const Badges: BadgeProps[] = [
	{
		title: 'React 19',
		link: 'https://react.dev/blog/2024/12/05/react-19',
	},
	{
		title: 'Vite 6',
		link: 'https://vite.dev/blog/announcing-vite6',
	},
	{
		title: 'TypeScript 5',
		link: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html',
	},
	{
		title: 'Redux Toolkit + Persist',
		link: 'https://redux-toolkit.js.org/',
	},
	{
		title: 'React Router 7',
		link: 'https://reactrouter.com/home',
	},
	{
		title: 'i18next',
		link: 'https://react.i18next.com/',
	},
	{
		title: 'Hot Toast',
		link: 'https://react-hot-toast.vercel.app/docs',
	},
	{
		title: 'classnames',
		link: 'https://manuals.muthu.co/posts/javascript-libraries-and-functions/classnames.html',
	},
	{
		title: 'Sass',
		link: 'https://sass-lang.com/',
	},
	{
		title: 'React Loading Skeleton',
		link: 'https://github.com/dvtng/react-loading-skeleton',
	},
	{
		title: 'ESLint',
		link: 'https://eslint.org/docs/latest/',
		tooltip: <EslintTooltip/>
	},
];

export const StackCard = () => {
	const { t } = useTranslation();
	
	return (
		<div className={styles.wrapper}>
			<p className={styles.description}>
				<Trans
					i18nKey="Описание проекта"
					components={{
						strong: <span style={{
							fontWeight: 'bold',
							color: 'white' 
						}} />,
						br: <br />
					}}
				/>
			</p>

			<h2 className={styles.title}>{t('Технологический стек')}</h2>
			
			<ul>
				{
					Badges.map((badge: BadgeProps) => (
						<Badge
							key={badge.title}
							title={badge.title}
							link={badge.link}
							tooltip={badge.tooltip}
							tooltipProps={{
								placement: 'Bottom'
							}}
						/>
					))
				}
			</ul>
		</div>
	);
};
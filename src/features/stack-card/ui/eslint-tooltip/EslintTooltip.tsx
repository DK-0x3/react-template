import styles from './EslintTooltip.module.scss';

const EslintCodes: string[] = [
	'Plugin Js',
	'Eslint TS',
	'Plugin Boundaries',
	'Plugin i18next',
	'Plugin Import',
	'Plugin jsxA11y',
	'Plugin OptimizeRegex',
	'Plugin React',
	'Plugin ReactHooks',
	'Plugin ReactPerf',
	'Plugin SimpleImportSort',
	'Plugin UnusedImports',
	'Plugin Import Typescript',
];


export const EslintTooltip = () => {
	return (
		<div className={styles.wrapper}>
			{EslintCodes.map((code: string) => {
				const [firstWord, ...rest] = code.split(' ');
				return (
					<code key={code}>
						<span className={styles.firstWord}>{firstWord}</span>{' '}
						{rest.join(' ')}
					</code>
				);
			})}
		</div>
	);
};
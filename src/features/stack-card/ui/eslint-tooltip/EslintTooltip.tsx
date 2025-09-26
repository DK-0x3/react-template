import styles from './EslintTooltip.module.scss';

const EslintCodes: string[] = [
	'Plugin Js',
	'TS Eslint',
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
];

export const EslintTooltip = () => {
	return (
		<div className={styles.wrapper}>
			{
				EslintCodes.map((code: string) => (
					<code key={code}>{code}</code>
				))
			}
		</div>
	);
};
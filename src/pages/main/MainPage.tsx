


import { DropDownMenu } from '@shared/ui/drop-down-menu/DropDownMenu';
import DropDownMenuItem from '@shared/ui/drop-down-menu/types/DropDownMenuItem';
import { useTranslation } from 'react-i18next';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const { t } = useTranslation();
	
	const CoinTimeZones: DropDownMenuItem<string>[] = [
		{
			value: '1',
			label: '1',
		},
		{
			value: '22',
			label: '22',
		},
		{
			value: '333',
			label: '333',
		},
		{
			value: '4444',
			label: '4444',
		},
		{
			value: '55555',
			label: '55555',
		},
	];
	
	return (
		<div className={styles.wrapper}>
			{/*<div>*/}
			{/*	<a href="https://vite.dev" target="_blank" rel="noreferrer">*/}
			{/*		<ViteLogo className={styles.Logo}/>*/}
			{/*	</a>*/}
			{/*	<a href="https://react.dev" target="_blank" rel="noreferrer">*/}
			{/*		<ReactLogo className={classNames(styles.Logo, styles.React)}/>*/}
			{/*	</a>*/}
			{/*	<a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">*/}
			{/*		<ReduxLogo className={classNames(styles.Logo, styles.Redux)}/>*/}
			{/*	</a>*/}
			{/*</div>*/}
			
			{/*<StackCard/>*/}
			
			<div className={styles.smart}>
				<DropDownMenu items={CoinTimeZones}>

				</DropDownMenu>
			</div>

			<a href="https://github.com/DK-0x3" className={styles.Copyright}>©DK-0x3</a>
		</div>
	);
};

export default MainPage;
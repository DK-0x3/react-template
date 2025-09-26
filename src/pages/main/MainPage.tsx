import { StackCard } from '@features/stack-card/ui/StackCard';
import ReactLogo from '@shared/assets/icons/react.svg';
import ReduxLogo from '@shared/assets/icons/redux.svg';
import ViteLogo from '@shared/assets/icons/vite.svg';
import classNames from 'classnames';

import styles from './MainPage.module.scss';

const MainPage = () => {
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

			<a href="https://github.com/DK-0x3" className={styles.Copyright}>©DK-0x3</a>
		</div>
	);
};

export default MainPage;
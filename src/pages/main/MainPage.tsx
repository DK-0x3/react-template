import { StackCard } from '@features/stack-card/ui/StackCard';
import { SmartIcon } from '@shared/ui/smart-icon/SmartIcon';
import classNames from 'classnames';

import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<SmartIcon iconName="vite" className={classNames(styles.Logo, styles.Vite)}/>
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<SmartIcon iconName="react" className={classNames(styles.Logo, styles.React)}/>
				</a>
				<a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">
					<SmartIcon iconName="redux" className={classNames(styles.Logo, styles.Redux)}/>
				</a>
			</div>
			
			<StackCard/>

			<a href="https://github.com/DK-0x3" className={styles.Copyright}>©DK-0x3</a>
		</div>
	);
};

export default MainPage;
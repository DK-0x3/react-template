import { SmartIcon } from '@shared/ui/smart-icon/SmartIcon';

import styles from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<div className={styles.wrapper}>
			<a
				className={styles.logoAndTitle}
				href="https://github.com/DK-0x3/react-template"
			>
				<SmartIcon iconName="logo" className={styles.logo}/>
				React Template
			</a>
		</div>
	);
};
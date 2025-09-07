import styles from './Input.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

interface InputProps {
    className?: string;
    placeholder?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props: InputProps) => {
	const {
		placeholder,
		className,
		onChange,
		type = 'text',
		...otherProps
	} = props;

	return (
		<input {...otherProps}
			className={classNames(styles.Input)}
			type={type}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};
 
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerApp.scss';

import classNames from 'classnames';
import { ru } from 'date-fns/locale';
import { useState } from 'react';
import DatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import CalendarSvg from '@shared/assets/icons/calendar.svg';
import { ButtonToday } from './button-today/ButtonToday';
import styles from './DatePickerApp.module.scss';

interface DatePickerAppProps {
    initialValue?: Date | null;
    onSelectValue?: (e: Date | null) => void;
    minDate?: Date;
    maxDate?: Date | null;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    inputClassName?: string;
    propsPicker?: Partial<ReactDatePickerCustomHeaderProps>;
}

/**
 * Компонент обертка для DataPicker из `react-datepicker`
 */
export const DatePickerApp = ({
	initialValue,
	onSelectValue,
	minDate,
	maxDate,
	placeholder = 'Выберите дату',
	disabled = false,
	className,
	inputClassName,
	propsPicker,
}: DatePickerAppProps) => {

	const [value, setValue] = useState<Date | null>(initialValue || new Date());

	const onSelectDate = (e: Date | null) => {
		setValue(e);

		onSelectValue?.(e);
	};

	return (
		<div className={classNames(styles.wrapper, className)}>
			<DatePicker
				selected={value}
				onChange={onSelectDate}
				minDate={minDate}
				maxDate={maxDate || undefined}
				placeholderText={placeholder}
				disabled={disabled}
				dateFormat="dd.MM.yyyy"
				className={classNames(styles.datePicker, inputClassName)}
				locale={ru}
				popperClassName={styles.datePickerPopper}
				showPopperArrow={false}
				todayButton={<ButtonToday/>}
				customInput={
					<input className={classNames(styles.datePicker, inputClassName)} />
				}
				showIcon
				icon={<CalendarSvg/>}
				{...propsPicker}
			/>
		</div>
	);
};
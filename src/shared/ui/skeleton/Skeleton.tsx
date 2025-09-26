import cx from 'classnames';
import React from 'react';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
	width?: string | number;
	height?: string | number;
	borderRadius?: string | number;
	count?: number;
	className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (
	{
		width = '100%',
		height = '100%',
		borderRadius = '10px',
		count = 1,
		className,
	}) => {
	const style: React.CSSProperties = {
		width,
		height,
		borderRadius,
	};

	return (
		<>
			{Array.from({ length: count }).map((_, idx) => (
				<div
					key={idx}
					className={cx(styles.wrapper, className)}
					style={style}
				/>
			))}
		</>
	);
};

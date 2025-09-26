import { useOutsideClick } from '@shared/lib/hooks/useOutsideClick';
import { useEffect, useRef } from 'react';

export const useModal = (
	onActive: (value: boolean) => void,
	isActive: boolean,
	modalInModalActive?: boolean,
) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const modalContentRef = useOutsideClick<HTMLDivElement>(() => onActive(false), modalInModalActive);

	useEffect(() => {
		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.code === 'Escape' && isActive && !modalInModalActive) {
				onActive(false);
			}
		};

		document.addEventListener('keydown', handleEscapeKey);

		return () => document.removeEventListener('keydown', handleEscapeKey);
	});

	return {
		modalContentRef,
		modalRef
	};
};

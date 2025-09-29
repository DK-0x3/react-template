import { useModal } from '@shared/lib/hooks/useModal';
import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import CloseModalButton from './close-modal-button/CloseModalButton';
import styles from './Modal.module.scss';

interface INewModalProps {
	active: boolean,
	closeFunc: (active: boolean) => void,
	contentClassName?: string,
	children: React.ReactNode,
	modalInModalActive?: boolean
}

export const portal = document.getElementById('portal');

/** Компонент - модальное окно */
export const Modal = ({
	active,
	closeFunc,
	contentClassName,
	children,
	modalInModalActive,
}: INewModalProps) => {
	const {
		modalRef,
		modalContentRef,
	} = useModal(closeFunc, active, modalInModalActive);

	const onClose = () => closeFunc(false);

	return (
		<>
			{
				ReactDOM.createPortal(
					<CSSTransition
						in={active}
						timeout={500}
						nodeRef={modalRef}
						classNames={{
							enter: styles.modalEnter,
							enterActive: styles.modalEnterActive,
							exit: styles.modalExit,
							exitActive: styles.modalExitActive,
						}}
						unmountOnExit
					>
						<div
							className={styles.modal}
							ref={modalRef}
							role="presentation"
						>
							<div
								className={cx(styles.contentWrapper, contentClassName)}
								ref={modalContentRef}
								onMouseDown={(e) => e.stopPropagation()}
							>
								<CloseModalButton onClose={onClose} />
								{children}
							</div>
						</div>
					</CSSTransition>,
					portal as Element,
				)
			}
		</>
	);
};

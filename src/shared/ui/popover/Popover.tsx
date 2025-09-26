import cx from 'classnames';
import {
	ReactNode,
	RefObject,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';

import { PlacementSide } from '../../types/PlacementSide';
import styles from './Popover.module.scss';

interface PopoverProps {
    anchorRef: RefObject<HTMLElement>;
    isOpen: boolean;
    children: ReactNode;
    onClose?: () => void;
    className?: string;
    isPortal?: boolean;
    fixedWidth?: number;
    isAnchorWidth?: boolean;
    placement?: PlacementSide;
    offset?: number;
}

/**
 * Компонент всплывающего блока (popover).
 *
 * Отображает произвольный контент (`children`) относительно якорного элемента `anchorRef`.
 * Позиционирование задаётся через `placement` и корректируется при выходе за пределы окна.
 *
 * Поддерживает закрытие по клику вне и клавише Escape.
 * Автоматически пересчитывает позицию при:
 * - изменении размеров окна (`resize`)
 * - скролле (`scroll`)
 * - изменении размеров якоря или содержимого (через `ResizeObserver`)
 *
 * @param {RefObject<HTMLElement>} anchorRef ссылка на элемент, относительно которого позиционируется popover
 * @param {boolean} isOpen флаг отображения popover
 * @param {ReactNode} children содержимое всплывающего блока
 * @param {() => void} [onClose] колбэк, вызываемый при клике вне блока или по Escape
 * @param {string} [className] дополнительный CSS-класс для стилизации
 * @param {boolean} [isPortal=true] использовать ли React Portal (рендер в `document.body`)
 * @param {number} [fixedWidth] зафиксировать ширину popover в пикселях
 * @param {boolean} [isAnchorWidth=true] растягивать ли popover по ширине родителя
 * @param {PlacementSide} [placement=PlacementSide.BOTTOM_LEFT] сторона, где появится popover относительно anchor
 * @param {number} [offset=8] отступ в пикселях от anchor
 *
 * @example
 * ```tsx
 * const anchorRef = useRef<HTMLButtonElement>(null);
 *
 * return (
 *   <>
 *     <button ref={anchorRef} onClick={() => setOpen(!open)}>Открыть</button>
 *     <Popover
 *       anchorRef={anchorRef}
 *       isOpen={open}
 *       onClose={() => setOpen(false)}
 *       placement={PlacementSide.BOTTOM_RIGHT}
 *     >
 *       <div>Контент поповера</div>
 *     </Popover>
 *   </>
 * )
 * ```
 */
export const Popover = (
	{
		anchorRef,
		isOpen,
		children,
		onClose,
		className,
		isPortal = true,
		fixedWidth,
		isAnchorWidth = true,
		placement = PlacementSide.BOTTOM_LEFT,
		offset = 8,
	}: PopoverProps) => {
	const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });

	const popoverRef = useRef<HTMLDivElement>(null);

	// Пересчёт при открытии и изменении параметров
	useLayoutEffect(() => {
		if (isOpen) {
			updatePosition();
		}
	}, [isOpen, placement, isAnchorWidth, fixedWidth, offset]);

	// Пересчёт при resize/scroll
	useEffect(() => {
		if (!isOpen) return;
		const onScroll = () => updatePosition();
		const onResize = () => updatePosition();

		window.addEventListener('scroll', onScroll, true);
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('scroll', onScroll, true);
			window.removeEventListener('resize', onResize);
		};
	}, [isOpen]);

	// Автопересчёт при изменении размеров anchor или popover
	useEffect(() => {
		if (!isOpen || !popoverRef.current || !anchorRef.current) return;

		const ro = new ResizeObserver(() => {
			updatePosition();
		});

		ro.observe(popoverRef.current);
		ro.observe(anchorRef.current);

		return () => ro.disconnect();
	}, [isOpen]);

	// Закрытие по клику вне и Escape
	useEffect(() => {
		if (!isOpen) return;

		const handleClick = (e: MouseEvent) => {
			const target = e.target as Node;
			if (
				anchorRef.current?.contains(target) ||
                popoverRef.current?.contains(target)
			) {
				return;
			}
			onClose?.();
		};

		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose?.();
			}
		};

		document.addEventListener('mousedown', handleClick);
		document.addEventListener('keydown', handleEsc);

		return () => {
			document.removeEventListener('mousedown', handleClick);
			document.removeEventListener('keydown', handleEsc);
		};
	}, [isOpen, anchorRef, onClose]);

	const updatePosition = () => {
		if (!anchorRef.current || !popoverRef.current) return;

		const rect = anchorRef.current.getBoundingClientRect();
		const popRect = popoverRef.current.getBoundingClientRect();

		const viewportW = window.innerWidth;
		const viewportH = window.innerHeight;

		const width = isAnchorWidth
			? rect.width
			: fixedWidth
				? fixedWidth
				: popRect.width;

		let top = 0;
		let left = 0;

		switch (placement) {
		case PlacementSide.BOTTOM_LEFT:
			top = rect.bottom + window.scrollY + offset;
			left = rect.left + window.scrollX;
			break;
		case PlacementSide.BOTTOM_RIGHT:
			top = rect.bottom + window.scrollY + offset;
			left = rect.right + window.scrollX - width;
			break;
		case PlacementSide.TOP_LEFT:
			top = rect.top + window.scrollY - popRect.height - offset;
			left = rect.left + window.scrollX;
			break;
		case PlacementSide.TOP_RIGHT:
			top = rect.top + window.scrollY - popRect.height - offset;
			left = rect.right + window.scrollX - width;
			break;
		case PlacementSide.LEFT_TOP:
			top = rect.top + window.scrollY;
			left = rect.left + window.scrollX - popRect.width - offset;
			break;
		case PlacementSide.LEFT_BOTTOM:
			top = rect.bottom + window.scrollY - popRect.height;
			left = rect.left + window.scrollX - popRect.width - offset;
			break;
		case PlacementSide.RIGHT_TOP:
			top = rect.top + window.scrollY;
			left = rect.right + window.scrollX + offset;
			break;
		case PlacementSide.RIGHT_BOTTOM:
			top = rect.bottom + window.scrollY - popRect.height;
			left = rect.right + window.scrollX + offset;
			break;
		}

		// --- Коррекция, если вылезает за экран ---
		const actualWidth = width ?? popRect.width;
		const actualHeight = popRect.height;

		// горизонтальные границы
		if (left < 0) {
			left = 0;
		} else if (left + actualWidth > viewportW + window.scrollX) {
			left = viewportW + window.scrollX - actualWidth - offset;
		}

		// вертикальные границы
		if (top < 0) {
			top = 0;
		} else if (top + actualHeight > viewportH + window.scrollY) {
			top = viewportH + window.scrollY - actualHeight - offset;
		}

		setPos({ top, left, width });
	};

	if (!isOpen) return null;

	const popoverContent = (
		<div
			ref={popoverRef}
			className={cx(styles.popover, className)}
			style={{
				position: 'absolute',
				top: pos.top,
				left: pos.left,
				width: fixedWidth ? fixedWidth : (isAnchorWidth ? pos.width : undefined),
			}}
		>
			{children}
		</div>
	);

	return isPortal ? createPortal(popoverContent, document.body) : popoverContent;
};
import styles from './Tooltip.module.scss';
import {
	CSSProperties,
	FC,
	ReactElement,
	ReactNode,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import Placement from '../drop-down-menu/types/Placement';
import classNames from 'classnames';

export interface TooltipProps {
    /** Контент тултипа */
    content: ReactNode;
    /** Элемент-триггер */
    children: ReactElement;
    /** Позиция */
    placement?: Placement;
    /** Задержка появления в мс */
    delay?: number;
    /** Кастомный класс */
    className?: string;
    /** Inline-стили тултипа */
    style?: CSSProperties;
    /** Отступ от родителя */
    offset?: number;
}

const useIsoLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const Tooltip: FC<TooltipProps> = ({
	content,
	children,
	placement = 'Top',
	delay = 150,
	className,
	style,
	offset = 8,
}) => {
	const [visible, setVisible] = useState(false);
	const [coords, setCoords] = useState<{ top: number; left: number }>({
		top: 0,
		left: 0,
	});
	const showTimerRef = useRef<number | null>(null);

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const tooltipRef = useRef<HTMLDivElement | null>(null);

	const updatePosition = () => {
		if (!wrapperRef.current || !tooltipRef.current) return;

		const triggerRect = wrapperRef.current.getBoundingClientRect();
		const tooltipRect = tooltipRef.current.getBoundingClientRect();

		let top = 0;
		let left = 0;

		switch (placement) {
		case 'Top':
			top = triggerRect.top - tooltipRect.height - offset;
			left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
			break;
		case 'Bottom':
			top = triggerRect.bottom + offset;
			left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
			break;
		case 'Left':
			top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
			left = triggerRect.left - tooltipRect.width - offset;
			break;
		case 'Right':
			top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
			left = triggerRect.right + offset;
			break;
		}

		// учитываем прокрутку страницы
		top += window.scrollY;
		left += window.scrollX;

		const { innerWidth, innerHeight, scrollX, scrollY } = window;

		if (left < scrollX) left = scrollX + 5;
		if (top < scrollY) top = scrollY + 5;

		if (left + tooltipRect.width > scrollX + innerWidth) {
			left = scrollX + innerWidth - tooltipRect.width - 5;
		}
		if (top + tooltipRect.height > scrollY + innerHeight) {
			top = scrollY + innerHeight - tooltipRect.height - 5;
		}

		setCoords({ top, left });
	};

	// показать с задержкой
	const show = () => {
		if (showTimerRef.current) window.clearTimeout(showTimerRef.current);
		showTimerRef.current = window.setTimeout(() => {
			setVisible(true);
		}, delay);
	};

	// скрыть
	const hide = () => {
		if (showTimerRef.current) window.clearTimeout(showTimerRef.current);
		setVisible(false);
	};

	// пересчитываем позицию при показе + на событиях страницы
	useIsoLayoutEffect(() => {
		if (!visible) return;

		const onScrollOrResize = () => updatePosition();

		// rAF — чтобы рассчитать уже после применения классов
		const raf = requestAnimationFrame(updatePosition);

		window.addEventListener('scroll', onScrollOrResize, true);
		window.addEventListener('resize', onScrollOrResize);

		// подстроиться под изменение размеров контента
		const ro = new ResizeObserver(() => updatePosition());
		if (tooltipRef.current) ro.observe(tooltipRef.current);
		if (wrapperRef.current) ro.observe(wrapperRef.current);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScrollOrResize, true);
			window.removeEventListener('resize', onScrollOrResize);
			ro.disconnect();
		};
	}, [visible, placement, offset]);

	// Переставлять при смене placement даже когда видно
	useEffect(() => {
		if (visible) updatePosition();
	}, [placement]);

	return (
		<>
			<div
				ref={wrapperRef}
				onMouseEnter={show}
				onMouseLeave={hide}
				onFocus={show}
				onBlur={hide}
				style={{ display: 'inline-block' }}
			>
				{children}
			</div>

			{/* Всегда в DOM — переключаем только классами */}
			<div
				ref={tooltipRef}
				role="tooltip"
				aria-hidden={!visible}
				className={classNames(
					styles.Tooltip,
					styles[`Tooltip${placement}`],
					{ [styles.TooltipShow]: visible },
					className
				)}
				style={{
					top: coords.top,
					left: coords.left,
					...style,
				}}
			>
				{content}
			</div>
		</>
	);
};

import { RefObject, useEffect, useRef } from 'react';
/**
 * React-хук для обработки клика вне указанного элемента.
 * 🔹 Generic:
 * Хук является дженериком (`<T extends HTMLElement = HTMLElement>`), что позволяет
 * типизировать `ref` под конкретный HTML-элемент (например, `HTMLDivElement`, `HTMLButtonElement`).
 *
 * @template T - Тип элемента, к которому будет привязан ref (по умолчанию `HTMLElement`).
 *
 * @param {() => void} callback - Функция, вызываемая при клике вне элемента.
 * @param {boolean} [skip=false] - Флаг, позволяющий временно отключить обработку.
 *   Если `true`, хук не будет вызывать `callback`.
 * @param {string} [exceptionId] - ID элемента-исключения. Если клик был внутри
 *   этого элемента или его потомков, `callback` не вызовется.
 * @param {'click' | 'mousedown' | 'mouseup'} [eventType='mousedown'] - Тип события,
 *   по которому будет отслеживаться клик.
 *
 * @returns {RefObject<T>} ref - React-ссылка, которую нужно повесить на отслеживаемый элемент.
 *
 * @example
 * // Базовое использование
 * const ref = useOutsideClick<HTMLDivElement>(() => {
 *   console.log('Клик снаружи!');
 * });
 *
 * return <div ref={ref}>Контент</div>;
 *
 * @example
 * // Использование с исключением (например, кнопка открытия модалки)
 * const ref = useOutsideClick<HTMLDivElement>(
 *   () => setOpen(false),
 *   false,
 *   'open-modal-button'
 * );
 *
 * return (
 *   <>
 *     <button id="open-modal-button" onClick={() => setOpen(true)}>Открыть</button>
 *     {open && <div ref={ref}>Модалка</div>}
 *   </>
 * );
 *
 * @example
 * // Временное отключение
 * const ref = useOutsideClick<HTMLDivElement>(
 *   () => console.log('Clicked outside!'),
 *   skip = isLoading // пока грузим данные — клик игнорируется
 * );
 */
export const useOutsideClick = <
    T extends HTMLElement = HTMLElement
>(
		callback: () => void,
		skip: boolean = false,
		exceptionId?: string,
		eventType: 'click' | 'mousedown' | 'mouseup' = 'mousedown'
	): RefObject<T> => {
	const ref = useRef<T>(null as unknown as T);

	useEffect(() => {
		if (skip) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (!ref.current) return;

			const target = event.target as Node;

			if (ref.current.contains(target)) return;

			if (exceptionId && document.getElementById(exceptionId)?.contains(target)) return;

			callback();
		};

		document.addEventListener(eventType, handleClickOutside);

		return () => {
			document.removeEventListener(eventType, handleClickOutside);
		};
	}, [callback, skip, exceptionId, eventType]);

	return ref;
};

import React, { useEffect, useRef, useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    className?: string;
    fixedWidth?: number;
    fixedHeight?: number;
}

/**
 * Изображение которое масштабируется по меньшей стороне
 */
const SmartImage: React.FC<SmartImageProps> = ({ src, alt = '', className, fixedWidth, fixedHeight, ...rest }) => {
	const imgRef = useRef<HTMLImageElement>(null);
	const [style, setStyle] = useState<React.CSSProperties>({
		width: 'auto',
		height: 'auto',
		objectFit: 'contain',
		display: 'block',
	});

	const adjustImage = () => {
		const img = imgRef.current;
		if (!img || !img.parentElement) return;

		const { width: parentW, height: parentH } = img.parentElement.getBoundingClientRect();
		const { naturalWidth, naturalHeight } = img;

		const imgAspect = naturalWidth / naturalHeight;
		const parentAspect = parentW / parentH;

		if (imgAspect > parentAspect) {
			// Заполняем по высоте (широкая картинка)
			setStyle((prev) => ({
				...prev,
				height: fixedHeight ? fixedHeight : '100%',
				width: fixedWidth ? fixedWidth : 'auto',
			}));
		} else {
			// Заполняем по ширине (высокая картинка)
			setStyle((prev) => ({
				...prev,
				width: fixedWidth ? fixedWidth : '100%',
				height: fixedHeight ? fixedHeight : 'auto',
			}));
		}
	};

	useEffect(() => {
		const img = imgRef.current;

		if (img?.complete) {
			adjustImage();
		} else {
			img?.addEventListener('load', adjustImage);
		}

		window.addEventListener('resize', adjustImage);
		return () => {
			window.removeEventListener('resize', adjustImage);
			img?.removeEventListener('load', adjustImage);
		};
	}, [src]);

	return (
		<img
			ref={imgRef}
			src={src}
			alt={alt}
			className={className}
			style={style}
			{...rest}
		/>
	);
};

export default SmartImage;

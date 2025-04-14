import React from 'react';
import { motion, Variants, PanInfo } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface CarouselSlideProps {
    slideNumber: number;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    buttonText?: string;
    buttonLink?: string;
    backgroundColor?: string;
    totalSlides: number;
    buttonIcon?: React.ReactNode;
    children?: React.ReactNode;

    // Framer Motion animation props
    variants?: Variants;
    initial?: string | false | undefined;
    animate?: string | false | undefined;
    exit?: string | undefined;
    custom?: number;

    drag?: boolean | 'x' | 'y';
    dragConstraints?: Partial<{ left: number; right: number; top: number; bottom: number }>;
    dragElastic?: boolean | number;
    onDragEnd?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
                                                         slideNumber,
                                                         title,
                                                         subtitle,
                                                         description,
                                                         image,
                                                         buttonText,
                                                         buttonLink,
                                                         backgroundColor = 'bg-spaane-green',
                                                         totalSlides,
                                                         buttonIcon,
                                                         children,
                                                         variants,
                                                         initial,
                                                         animate,
                                                         exit,
                                                         custom,
                                                         drag,
                                                         dragConstraints,
                                                         dragElastic,
                                                         onDragEnd,
                                                     }) => {
    return (
        <motion.div
            className={`${backgroundColor} min-h-[80vh] flex flex-col justify-between w-full relative overflow-hidden`}
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            custom={custom}
            drag={drag}
            dragConstraints={dragConstraints}
            dragElastic={dragElastic}
            onDragEnd={onDragEnd}
        >
            {image && (
                <>
                    <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </>
            )}

            <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-0 relative z-20">
                <div className="w-full md:w-1/2 text-white space-y-6">
                    {subtitle && <h3 className="text-xl font-medium">{subtitle}</h3>}
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
                    {description && <p className="text-lg md:text-xl">{description}</p>}

                    {buttonText && buttonLink && (
                        <div className="mt-8">
                            <Link to={buttonLink}>
                                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-6 text-lg rounded-full">
                                    {buttonText} {buttonIcon}
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 relative z-20">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default CarouselSlide;





import { useRef } from "react";
import { MotionValue, motion } from "framer-motion";
import './imagesegment.scss'
import { useScrollMotion } from "../../hooks/useScrollMotion";

interface SegmentBackgroundProps {
    time: number[];
    value: number[] | string[];
}

interface MovementProps {
    x?: SegmentBackgroundProps;
    scale?: SegmentBackgroundProps;
    clipPath?: SegmentBackgroundProps;
}

interface ImageSegmentProps {
    scrollYProgress: MotionValue<number>;
    movement: MovementProps;
    className?: string;
    image?: string;
    children?: JSX.Element;
    count?: number;
    index?: number;
}

export const ImageSegment = ({ 
    scrollYProgress, 
    count=1,
    index=0,
    children, 
    image,
    movement,
    className = '',
    
}: ImageSegmentProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const { x, scale, clipPath } = useScrollMotion(scrollYProgress, movement, count, index);
    
    return (<motion.div 
        style={{
            x,
            scale,
            clipPath,
            backgroundImage: image ? `url(${image})` : ''
        }}
        className={`image-segment ${className}`}>
        <div>
            <div ref={ref} >
                { children && children }
            </div>
        </div>
    </motion.div>)
}
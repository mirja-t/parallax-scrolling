import { MotionValue, useTransform } from "framer-motion";

interface SegmentBackgroundProps {
    time: number[];
    value: number[] | string[];
}

interface MovementProps {
    x?: SegmentBackgroundProps;
    scale?: SegmentBackgroundProps;
    clipPath?: SegmentBackgroundProps;
}

export const useScrollMotion = (
    scrollYProgress: MotionValue<number>, 
    movement: MovementProps,
    count: number = 1,
    index: number = 0) => {
        
    const xTime = movement.x ? movement.x.time.map(val => index / count + (val / count)) : [0, 1]
    const scaleTime = movement.scale ? movement.scale.time.map(val => index / count + (val / count)) : [0, 1]
    const clipPathTime = movement?.clipPath ? movement.clipPath.time.map(val => index / count + (val / count)) : [0, 1]

    const x = useTransform(
        scrollYProgress, 
        xTime, 
        movement?.x ? [...movement.x.value] : ['0%', '0%']
    )
    const scale = useTransform(
        scrollYProgress, 
        scaleTime,
        movement.scale ? [...movement.scale.value] : [1, 1]
    )
    const clipPath = useTransform(
        scrollYProgress, 
        clipPathTime, 
        movement?.clipPath ? [...movement.clipPath.value] : [`inset(0% 0% 0% 0%)`, `inset(0% 0% 0% 0%)`]
    )

    return { x, scale, clipPath };
}
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react"
import './ScrollComponent.scss';

interface ScrollComponentBackgroundProps {
    time: number[];
    value: number[];
}

interface ScrollComponentProps {
    renderComponent: (scrollYProgress: MotionValue<number>, count: number) => JSX.Element;
    movement: {
        x: ScrollComponentBackgroundProps;
        scale: ScrollComponentBackgroundProps;
    };
    bg?: string;
    padding?: string;
    children: JSX.Element | JSX.Element[];
}

export const ScrollComponent = ({renderComponent, movement, children, bg='transparent', padding='15px'}: ScrollComponentProps) => {

    const scrollRef = useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: [0, 1]
    })

    const x = useTransform(
        scrollYProgress, 
        [...movement.x.time], 
        movement.x.value.map(val => val + '%')
    )
    const scale = useTransform(scrollYProgress, movement.scale.time, movement.scale.value)
    const count = React.Children.count(children)

    

    return (<div 
        className="scrollcomponent"
        ref={scrollRef}>
        
        { children }
            <div 
            className="parallax-layer">
                <motion.div 
                    className="section-wrapper"
                    style={{
                        x,
                        scale,
                        backgroundColor: bg,
                        inset: padding,
                        width: `calc(100% - ${padding} * 2)`,
                        height: `calc(100vh - ${padding} * 2)`,
                    }}>
                        { renderComponent(scrollYProgress, count) }
                </motion.div>
            </div>
    </div>)
}
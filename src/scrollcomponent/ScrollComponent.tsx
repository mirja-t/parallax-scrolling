import { MotionValue, useScroll } from "framer-motion";
import React, { useRef } from "react"
import './ScrollComponent.scss';

interface ScrollComponentProps {
    renderComponent: (scrollYProgress: MotionValue<number>, count: number) => JSX.Element;
    children: JSX.Element | JSX.Element[];
}

export const ScrollComponent = ({renderComponent, children}: ScrollComponentProps) => {

    const scrollRef = useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: [0, 1]
    })

    const count = React.Children.count(children)    

    return (<div 
        className="scrollcomponent"
        ref={scrollRef}>
        
        { children }
            <div 
            className="parallax-layer">
                <div 
                    className="section-wrapper">
                        { renderComponent(scrollYProgress, count) }
                </div>
            </div>
    </div>)
}
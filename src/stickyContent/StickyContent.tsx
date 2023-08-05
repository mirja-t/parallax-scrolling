import React, { useRef, useState } from 'react';
import './stickyContent.scss';
import { useMotionValueEvent, useScroll } from 'framer-motion';

interface StickyContentProps {
    children: JSX.Element | JSX.Element[];
    offset?: number;
}

export const StickyContent = ({ children, offset = 25 }: StickyContentProps) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start ${offset / 100}`, `start start`]
    });
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setY(latest)
    })

    const childrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {scrollprogress: y});
    });

    return (
        <div 
            ref={ref}
            className="sticky-content">
                <div
                    style={{
                        top: `${offset}%`
                    }}>
                    { childrenWithProps }
                </div>
        </div>
    )
}
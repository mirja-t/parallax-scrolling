import React, { useRef, useState } from 'react';
import './stickyContent.scss';
import { useMotionValueEvent, useScroll } from 'framer-motion';

interface StickyContentProps {
    children: JSX.Element | JSX.Element[];
    offset?: number;
}

export const StickyContent = ({ children, offset = 25 }: StickyContentProps) => {

    return (
        <div className="sticky-content">
                <div
                    style={{
                        top: `${offset}%`
                    }}>
                    { children }
                </div>
        </div>
    )
}
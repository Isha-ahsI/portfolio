import React, { useEffect, useState } from 'react'

export const ScrollProgressBar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 z-50 w-full h-0.5 bg-light/50 dark:bg-dark/50 backdrop-blur-2xl">
            <div
                style={{ transform: `scaleX(${scrollTop / 100})` }}
                className="h-full bg-primary origin-left transition-all duration-150 ease-linear shadow-[0_0_8px_theme(colors.primary),0_0_16px_theme(colors.primary)]"
            ></div>
        </div>
    );
};
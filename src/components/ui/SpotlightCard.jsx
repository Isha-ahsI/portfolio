import React, { useRef, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const SpotlightCard = ({
    children,
    className = "",
    borderColor = "#6366f1",
    borderOpacity = "60",
    spotlightColor = "#6366f1",
    spotlightOpacity = "20",
    ...props
}) => {
    const divRef = useRef(null);

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative overflow-hidden rounded-xl bg-dark/5 dark:bg-white/10 border border-dark/15 dark:border-light/15 text-dark dark:text-light transition-all duration-150 ease-in-out p-8 text-center flex flex-col items-center justify-center",
                className
            )}
            style={
                isHovered
                    ? {
                        border: `1px solid ${borderColor}${borderOpacity}`,
                    }
                    : {}
            }
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(
                        400px circle at ${position.x}px ${position.y}px,
                            ${spotlightColor}${spotlightOpacity},
                        transparent 40%
                    )`,
                }}
            />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

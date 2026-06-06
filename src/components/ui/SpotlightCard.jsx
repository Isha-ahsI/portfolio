import React, { useRef, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const SpotlightCard = ({
    children,
    className = "",
    borderColor = "#6366f1",
    borderOpacity = "50",
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
                "relative overflow-hidden rounded-xl bg-dark/5 dark:bg-white/10 border-dark/20 dark:border-light/20 text-dark dark:text-light transition-all p-8 text-center",
                className
            )}
            style={{
                border: `1px solid ${isHovered
                    ? `${borderColor}${borderOpacity}`
                    : "rgba(255,255,255,0.15)"
                    }`,
            }}
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


import React, { useEffect, useRef, useState } from "react";

export const Cursor = () => {
    const cursorRef = useRef(null);
    const requestRef = useRef(null);

    const mousePos = useRef({
        x: -100,
        y: -100,
    });

    const currentPos = useRef({
        x: -100,
        y: -100,
    });

    const [visible, setVisible] = useState(false);
    const [onPrimaryBg, setOnPrimaryBg] = useState(false);
    useEffect(() => {
        const animate = () => {
            if (!cursorRef.current) return;

            currentPos.current.x +=
                (mousePos.current.x - currentPos.current.x) * 0.12;

            currentPos.current.y +=
                (mousePos.current.y - currentPos.current.y) * 0.12;

            cursorRef.current.style.transform = `translate(
                ${currentPos.current.x}px,
                ${currentPos.current.y}px
            )`;

            requestRef.current =
                requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {

            const primaryBg = e.target.closest("[data-primary-bg]");

            setOnPrimaryBg(!!primaryBg);
            setVisible(true);

            mousePos.current = {
                x: e.clientX,
                y: e.clientY,
            };
        };

        const handleMouseLeave = () => {
            setVisible(false);
        };

        document.addEventListener(
            "mousemove",
            handleMouseMove
        );

        document.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        document.body.style.cursor = "none";

        requestRef.current =
            requestAnimationFrame(animate);

        return () => {
            document.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            document.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );

            if (requestRef.current) {
                cancelAnimationFrame(
                    requestRef.current
                );
            }

            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[99999] pointer-events-none"
            style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.2s ease",
                marginLeft: "-12px",
                marginTop: "-12px",
            }}
        >
            <div
                style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    border: onPrimaryBg
                        ? "1.5px solid #fff"
                        : "1.5px solid var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                        "0 0 10px rgba(0,0,0,0.08)",
                }}
            >
                <div
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: onPrimaryBg
                            ? "#fff"
                            : "var(--color-primary)",
                        boxShadow: onPrimaryBg
                            ? "0 0 8px #fff"
                            : "0 0 8px var(--color-primary)",
                    }}
                />
            </div>
        </div>
    );
};


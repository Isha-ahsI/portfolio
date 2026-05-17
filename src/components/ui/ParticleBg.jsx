// import React, { useEffect, useRef } from 'react'

// export const ParticleBg = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         let particles = [];
//         const particleCount = 80;

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.radius = Math.random() * 2 + 1;
//                 this.dx = (Math.random() - 0.5) * 0.5;
//                 this.dy = (Math.random() - 0.5) * 0.5;
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

//                 ctx.fillStyle = "rgba(99, 102, 241,0.5)";
//                 ctx.shadowBlur = 15;
//                 ctx.shadowColor = "#6366f1";

//                 ctx.fill();
//             }

//             update() {
//                 this.x += this.dx;
//                 this.y += this.dy;

//                 if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
//                 if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

//                 this.draw();
//             }
//         }

//         function init() {
//             particles = [];
//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }
//         }

//         function animate() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             particles.forEach((particle) => particle.update());

//             requestAnimationFrame(animate);
//         }

//         init();
//         animate();

//         window.addEventListener("resize", () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         });
//     }, []);
//     return (
//         <canvas
//             ref={canvasRef}
//             className="absolute inset-0 w-full h-full"
//         />
//     );
// }


import React, { useEffect, useRef } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { renderToStaticMarkup } from "react-dom/server";

export const ParticleBg = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const PRIMARY_COLOR = "#6366f1";

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const iconComponents = [
            FaHtml5,
            FaCss3Alt,
            FaJs,
            FaReact,
            RiTailwindCssFill,
            FaGithub,
        ];

        const icons = iconComponents.map((Icon) => {
            const svgString = renderToStaticMarkup(
                <Icon color={PRIMARY_COLOR} size={16} />
            );

            const img = new Image();
            img.src =
                "data:image/svg+xml;base64," +
                btoa(unescape(encodeURIComponent(svgString)));

            return img;
        });

        let particles = [];
        const particleCount = 40;

        class Particle {
            constructor() {
                // ✅ FULL SCREEN POSITION (STATIC BASE)
                this.baseX = Math.random() * width;
                this.baseY = Math.random() * height;

                // ✅ LOCAL MOVEMENT ONLY
                this.offsetX = 0;
                this.offsetY = 0;

                this.dx = (Math.random() - 0.5) * 0.3;
                this.dy = (Math.random() - 0.5) * 0.3;

                this.range = 10; // 🔥 movement limit

                this.size = Math.random() * 20 + 10;

                this.icon = icons[Math.floor(Math.random() * icons.length)];
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = 0.15;
                ctx.shadowBlur = 1;
                ctx.shadowColor = "#6366f1";
                ctx.drawImage(
                    this.icon,
                    this.baseX + this.offsetX,
                    this.baseY + this.offsetY,
                    this.size,
                    this.size
                );
                ctx.restore();
            }

            update() {
                // 🔥 ONLY LOCAL MOVEMENT
                this.offsetX += this.dx;
                this.offsetY += this.dy;

                // 🔥 limit small movement area (wiggle effect)
                if (this.offsetX > this.range || this.offsetX < -this.range) {
                    this.dx *= -1;
                }

                if (this.offsetY > this.range || this.offsetY < -this.range) {
                    this.dy *= -1;
                }

                this.draw();
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => p.update());
            requestAnimationFrame(animate);
        }

        init();
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
        />
    );
};
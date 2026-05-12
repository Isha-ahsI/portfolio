import React, { useEffect, useRef } from 'react'

export const ParticleBg = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];
        const particleCount = 80;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2 + 1;
                this.dx = (Math.random() - 0.5) * 0.5;
                this.dy = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

                ctx.fillStyle = "rgba(99, 102, 241,0.5)";
                ctx.shadowBlur = 15;
                ctx.shadowColor = "#6366f1";

                ctx.fill();
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;

                if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

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
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => particle.update());

            requestAnimationFrame(animate);
        }

        init();
        animate();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }, []);
    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
        />
    );
}

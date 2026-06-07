import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGulp,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSass, SiReactbootstrap } from "react-icons/si";
import { renderToStaticMarkup } from "react-dom/server";

export const ParticleBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const PRIMARY_COLOR = "#6366f1";

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvas();

    const iconComponents = [
      FaHtml5,
      FaCss3Alt,
      FaJs,
      SiSass,
      FaGulp,
      FaBootstrap,
      FaReact,
      RiTailwindCssFill,
      FaGithub,
      SiReactbootstrap
    ];

    const icons = iconComponents.map((Icon) => {
      const svgString = renderToStaticMarkup(
        <Icon color={PRIMARY_COLOR} size={12} />
      );

      const img = new Image();
      img.src =
        "data:image/svg+xml;base64," +
        btoa(unescape(encodeURIComponent(svgString)));

      return img;
    });

    let particles = [];

    const getParticleCount = () => {
      const area = width * height;

      if (area > 3000000) return 120; // 4K
      if (area > 1800000) return 90; // 2K
      if (area > 1000000) return 70; // Desktop
      if (area > 500000) return 50; // Tablet

      return 35; // Mobile
    };

    class Particle {
      constructor() {
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;

        this.offsetX = 0;
        this.offsetY = 0;

        this.dx = (Math.random() - 0.5) * 0.25;
        this.dy = (Math.random() - 0.5) * 0.25;

        this.range = 12;

        this.size = Math.random() * 16 + 12;

        this.icon = icons[Math.floor(Math.random() * icons.length)];
      }

      draw() {
        if (!this.icon.complete) return;

        ctx.save();

        ctx.globalAlpha = 0.1;
        ctx.shadowBlur = 2;
        ctx.shadowColor = PRIMARY_COLOR;

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
        this.offsetX += this.dx;
        this.offsetY += this.dy;

        if (
          this.offsetX > this.range ||
          this.offsetX < -this.range
        ) {
          this.dx *= -1;
        }

        if (
          this.offsetY > this.range ||
          this.offsetY < -this.range
        ) {
          this.dy *= -1;
        }

        this.draw();
      }
    }

    const init = () => {
      particles = [];

      const particleCount = getParticleCount();

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => particle.update());

      animationId = requestAnimationFrame(animate);
    };

    let loadedIcons = 0;

    icons.forEach((img) => {
      img.onload = () => {
        loadedIcons++;

        if (loadedIcons === icons.length) {
          init();
          animate();
        }
      };
    });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      setupCanvas();
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
    />
  );
};
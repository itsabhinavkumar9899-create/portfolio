import React, { useEffect, useRef } from 'react';

const THEME_RGB_COLORS = [
  '74, 222, 128', // Guava Green (Green-400)
  '236, 72, 153', // Guava Pink (Pink-500)
  '34, 197, 94',  // Deep Guava Leaf (Green-500)
  '244, 63, 94',  // Ripe Pulp Rose (Rose-500)
  '244, 114, 182', // Soft Tropical Pink (Pink-400)
];

const MOUSE_INTERACTION_RADIUS = 175;

function getPerfConfig(width, height) {
  const isMobile = width < 768;
  const count = isMobile
    ? Math.max(16, Math.min(24, Math.floor((width * height) / 20000)))
    : Math.max(32, Math.min(68, Math.floor((width * height) / 17000)));
  return {
    isMobile,
    count,
    connectionDist: isMobile ? 105 : 135,
    dpr: isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2),
  };
}

function createParticles(width, height, count) {
  return Array.from({ length: count }, (_, idx) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.42,
    vy: (Math.random() - 0.5) * 0.42,
    radius: Math.random() * 1.5 + 1.2,
    phase: Math.random() * Math.PI * 2,
    color: THEME_RGB_COLORS[idx % THEME_RGB_COLORS.length],
  }));
}

/**
 * Full-viewport fixed animated backdrop spanning the entire scrolling page.
 * Optimized for 60fps on phones via adaptive node budgets, zero per-frame gradient
 * allocations, GPU-only radial auroras, and background tab pausing.
 */
export default function PageBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const mouse = { x: 0, y: 0, active: false };

    let width = container.clientWidth;
    let height = container.clientHeight;
    let lastParticleWidth = width;
    let lastParticleHeight = height;
    let perf = getPerfConfig(width, height);
    let particles = createParticles(width, height, perf.count);
    let lastScrollY = window.scrollY;
    let pendingScrollDelta = 0;
    let animationFrameId = null;

    const resizeCanvas = () => {
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight;
      if (!nextWidth || !nextHeight) return;

      width = nextWidth;
      height = nextHeight;
      perf = getPerfConfig(width, height);

      canvas.width = Math.floor(width * perf.dpr);
      canvas.height = Math.floor(height * perf.dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(perf.dpr, 0, 0, perf.dpr, 0, 0);

      // Avoid resetting particle positions when mobile address bar collapses/expands on scroll
      const widthChanged = Math.abs(width - lastParticleWidth) > 20;
      const heightJumped = Math.abs(height - lastParticleHeight) > 160;
      if (widthChanged || heightJumped) {
        particles = createParticles(width, height, perf.count);
        lastParticleWidth = width;
        lastParticleHeight = height;
      }
    };

    const drawParticles = (timeMs) => {
      ctx.clearRect(0, 0, width, height);

      const scrollShift = prefersReducedMotion ? 0 : pendingScrollDelta * 0.2;
      pendingScrollDelta = 0;
      const maxDist = perf.connectionDist;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy - scrollShift;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;

          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > 0 && distSq < 9500) {
              const dist = Math.sqrt(distSq);
              const push = (1 - dist / 98) * 0.45;
              p.x += (dx / dist) * push;
              p.y += (dy / dist) * push;
            }
          }
        }

        // Fast squared-distance edge check with zero per-frame CanvasGradient allocations
        ctx.lineWidth = 0.85;
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = (1 - Math.sqrt(distSq) / maxDist) * 0.24;
            ctx.strokeStyle = `rgba(${p.color}, ${alpha.toFixed(2)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);
          if (mDist < MOUSE_INTERACTION_RADIUS) {
            const mAlpha = (1 - mDist / MOUSE_INTERACTION_RADIUS) * 0.42;
            ctx.strokeStyle = `rgba(${p.color}, ${mAlpha.toFixed(2)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }

        const pulse = prefersReducedMotion ? 1 : 0.85 + Math.sin(timeMs * 0.002 + p.phase) * 0.18;
        const r = p.radius * pulse;

        if (!perf.isMobile) {
          ctx.fillStyle = `rgba(${p.color}, 0.2)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${p.color}, 0.85)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const handleMouseMove = (e) => {
      if (isTouchDevice) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      pendingScrollDelta += currentY - lastScrollY;
      lastScrollY = currentY;
    };

    const startLoop = () => {
      if (animationFrameId !== null || prefersReducedMotion || document.hidden) return;
      const renderLoop = (time) => {
        drawParticles(time);
        animationFrameId = window.requestAnimationFrame(renderLoop);
      };
      animationFrameId = window.requestAnimationFrame(renderLoop);
    };

    const stopLoop = () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (prefersReducedMotion) {
      drawParticles(0);
    } else {
      startLoop();
    }

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
    >
      {/* GPU-Composited Flowing Perspective Grid Mesh */}
      <div className="absolute -inset-10 bg-grid-pattern animate-grid-flow opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_88%)]"></div>

      {/* Zero-Blur Radial Aurora Orbs (Guava Green & Guava Pink) */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-aurora-1 w-[420px] h-[320px] sm:w-[760px] sm:h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.18)_0%,rgba(236,72,153,0.14)_44%,transparent_72%)]"></div>
      </div>
      <div className="animate-aurora-2 absolute -bottom-24 -left-24 w-72 h-72 sm:w-[460px] sm:h-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18)_0%,rgba(244,63,94,0.12)_42%,transparent_70%)]"></div>
      <div className="animate-aurora-3 absolute -top-16 -right-24 w-72 h-72 sm:w-[460px] sm:h-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.18)_0%,rgba(34,197,94,0.1)_42%,transparent_70%)]"></div>
      <div className="animate-aurora-2 hidden sm:block absolute bottom-10 right-1/4 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.13)_0%,transparent_70%)]"></div>

      {/* Interactive 60 FPS Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import './Background3D.css';

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = "10";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      // Parana background color eka fade wena widiyata (Trail effect)
      ctx.fillStyle = 'rgba(7, 9, 19, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Binary text color eka
      ctx.fillStyle = '#6366f1'; 
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50); 

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="background-3d-wrapper">
      <canvas ref={canvasRef} className="binary-canvas" />
      <div className="gradient-ambient-orb orb-1"></div>
      <div className="gradient-ambient-orb orb-2"></div>
      <div className="gradient-ambient-orb orb-3"></div>
    </div>
  );
}
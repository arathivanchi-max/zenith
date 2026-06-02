'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function AmbientGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e) => {
      // Offset by half of the glow width (175px) to center it under the cursor
      glow.style.transform = `translate3d(${e.clientX - 175}px, ${e.clientY - 175}px, 0)`;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={glowRef} 
      className={styles.ambientGlow} 
      style={{ opacity: 0 }}
    />
  );
}

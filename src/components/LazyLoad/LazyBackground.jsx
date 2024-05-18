// LazyBackground.js
import React, { useRef, useEffect } from 'react';

const LazyBackground = ({ src, className, children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // IntersectionObsever detects when component enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.style.backgroundImage = `url(${src})`;
          observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.1 } 
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [src]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default LazyBackground;
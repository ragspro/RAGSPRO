import { useEffect } from 'react';

const MobilePerformanceOptimizer = () => {
  useEffect(() => {
    // Safari iOS specific optimizations
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isSafari || isIOS) {
      // Fix viewport height issues
      const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      setVH();
      window.addEventListener('resize', setVH);
      window.addEventListener('orientationchange', setVH);
      
      // Optimize scrolling
      document.body.style.webkitOverflowScrolling = 'touch';
      
      return () => {
        window.removeEventListener('resize', setVH);
        window.removeEventListener('orientationchange', setVH);
      };
    }
    
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency <= 2) {
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }
    
    // Optimize touch events
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
    
  }, []);

  return null;
};

export default MobilePerformanceOptimizer;
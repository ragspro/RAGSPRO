import { useEffect, useState } from 'react';

const MobileOptimizer = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    // Optimize for mobile performance
    if (typeof window !== 'undefined') {
      // Disable hover effects on touch devices
      if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
      }
      
      // Add device classes
      document.body.classList.add(
        isMobile ? 'mobile-device' : isTablet ? 'tablet-device' : 'desktop-device'
      );
    }

    return () => window.removeEventListener('resize', checkDevice);
  }, [isMobile, isTablet]);

  return (
    <div className={`mobile-optimizer ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
      {children}
    </div>
  );
};

export default MobileOptimizer;
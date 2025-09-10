import { useEffect, createContext, useContext } from 'react';
import { optimizeForDevice, preloadCriticalResources } from '../utils/performance';

const PerformanceContext = createContext();

export const usePerformance = () => useContext(PerformanceContext);

const PerformanceProvider = ({ children }) => {
  useEffect(() => {
    // Initialize performance optimizations
    optimizeForDevice();
    preloadCriticalResources();
    
    // Add performance classes to body
    const performanceLevel = window.PERFORMANCE_LEVEL || 'medium';
    document.body.classList.add(`${performanceLevel}-performance`);
    
    // Optimize for 60fps
    const style = document.createElement('style');
    style.textContent = `
      * { 
        transform: translateZ(0);
      }
      .animate-on-scroll {
        will-change: transform, opacity;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <PerformanceContext.Provider value={{ performanceLevel: window.PERFORMANCE_LEVEL }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export default PerformanceProvider;
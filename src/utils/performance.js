// Performance optimization utilities
export const optimizeForDevice = () => {
  if (typeof window === 'undefined') return;

  // Detect device capabilities
  const isHighPerformance = window.navigator.hardwareConcurrency >= 4;
  const hasGoodGPU = window.navigator.userAgent.includes('Chrome') || window.navigator.userAgent.includes('Safari');
  
  // Set performance level
  window.PERFORMANCE_LEVEL = isHighPerformance && hasGoodGPU ? 'high' : 'medium';
  
  // Optimize animations based on device
  if (!isHighPerformance) {
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
  }
};

// Lazy load heavy components
export const lazyLoadComponent = (importFunc) => {
  return React.lazy(() => 
    importFunc().then(module => ({
      default: module.default
    }))
  );
};

// Debounce scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Optimize Three.js performance
export const getThreeJSConfig = () => {
  const isHighPerf = window.PERFORMANCE_LEVEL === 'high';
  
  return {
    antialias: isHighPerf,
    powerPreference: 'high-performance',
    stencil: false,
    depth: true,
    alpha: true,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    failIfMajorPerformanceCaveat: false
  };
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/images/hero-bg.jpg',
    '/images/profile.jpg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
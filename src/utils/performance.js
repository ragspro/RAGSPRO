// Performance optimization utilities

// Passive event listeners for better scroll performance
export const addPassiveEventListener = (element, event, handler, options = {}) => {
  element.addEventListener(event, handler, { passive: true, ...options })
}

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for resize events
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Lazy loading utility
export const lazyLoad = (selector) => {
  const elements = document.querySelectorAll(selector)
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          element.classList.add('loaded')
          observer.unobserve(element)
        }
      })
    })
    
    elements.forEach(el => observer.observe(el))
  }
}

// Preload critical resources
export const preloadResource = (href, as, type) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) link.type = type
  document.head.appendChild(link)
}
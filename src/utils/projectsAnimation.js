export const initProjectsAnimation = () => {
  let isAnimating = false;
  
  const handleScroll = () => {
    if (isAnimating) return;
    
    const heroSection = document.querySelector('[data-hero-section]');
    const projectsSection = document.querySelector('#projects');
    const floatingCards = document.querySelectorAll('[data-floating-card]');
    const gridCards = document.querySelectorAll('[data-grid-card]');
    
    if (!heroSection || !projectsSection || !floatingCards.length) return;
    
    const heroRect = heroSection.getBoundingClientRect();
    const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - heroRect.bottom) / window.innerHeight));
    
    // Start animation when hero section is 30% scrolled
    if (scrollProgress > 0.3 && !isAnimating) {
      isAnimating = true;
      
      // Animate floating cards to grid positions
      floatingCards.forEach((card, index) => {
        const gridCard = gridCards[index];
        if (!gridCard) return;
        
        // Add transition class
        card.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Calculate target position
        const cardRect = card.getBoundingClientRect();
        const gridRect = gridCard.getBoundingClientRect();
        
        const deltaX = gridRect.left - cardRect.left;
        const deltaY = gridRect.top - cardRect.top;
        
        // Apply transform
        card.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1)`;
        card.style.zIndex = '10';
        
        // After animation completes
        setTimeout(() => {
          card.style.opacity = '0';
          gridCard.style.opacity = '1';
          gridCard.style.transform = 'translateY(0)';
          
          if (index === floatingCards.length - 1) {
            setTimeout(() => {
              isAnimating = false;
            }, 200);
          }
        }, 1200);
      });
    }
  };
  
  // Throttled scroll handler
  let ticking = false;
  const throttledScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', throttledScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', throttledScroll);
  };
};

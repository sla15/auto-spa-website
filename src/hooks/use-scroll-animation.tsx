
import { useState, useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number; // Percentage of element that needs to be visible
  offset?: number; // Additional offset from the top of the viewport
  once?: boolean; // Whether animation should only happen once
  delay?: number; // Delay before animation starts (ms)
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [opacity, setOpacity] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const {
    threshold = 0.4, // Default to 40% 
    offset = 0,
    once = true,
    delay = 0
  } = options;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (!ref.current) return;
      if (once && hasAnimated) return;
      
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element is between bottom of viewport and threshold% from the top
      if (rect.top <= windowHeight - offset && rect.bottom >= 0) {
        // Start at 0 opacity when element just enters viewport
        // Reach full opacity when element is threshold% into viewport
        const viewportEntry = windowHeight - rect.top;
        const thresholdPixels = windowHeight * threshold;
        const calculatedOpacity = Math.min(viewportEntry / thresholdPixels, 1);
        
        if (delay > 0 && calculatedOpacity > 0 && opacity === 0) {
          // Apply delay only for the initial animation
          timeoutId = setTimeout(() => {
            setOpacity(calculatedOpacity);
          }, delay);
        } else {
          setOpacity(calculatedOpacity);
        }
        
        if (calculatedOpacity >= 1 && once) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [threshold, offset, once, delay, hasAnimated, opacity]);

  return { opacity, ref, hasAnimated };
};

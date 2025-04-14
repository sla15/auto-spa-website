
import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element is between bottom of viewport and 40% from the top
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Start at 0 opacity when element just enters viewport
        // Reach full opacity when element is 40% into viewport
        const viewportEntry = windowHeight - rect.top;
        const threshold = windowHeight * 0.4;
        const calculatedOpacity = Math.min(viewportEntry / threshold, 1);
        
        setOpacity(calculatedOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { opacity, ref };
};

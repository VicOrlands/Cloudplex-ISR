import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px'
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const callbackFunction = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin,
      threshold,
    });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callbackFunction, rootMargin, threshold]);

  return { ref, isVisible };
};

export default useIntersectionObserver;
// useIntersectionObserver.js
import { useRef, useEffect } from 'react';

export default function useIntersectionObserver(setCurrentItem) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentItem(entry.target.id);
          }
        });
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, setCurrentItem]);

  return ref;
}
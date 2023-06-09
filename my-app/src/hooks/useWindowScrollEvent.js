import { useEffect } from 'react';
// useWindowScrollEvent
// window scroll event
export const useWindowScrollEvent = (listener) => {
  useEffect(() => {
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);
};

import { useRef } from "react";

type T = HTMLElement

const useScrollIntoView = () => {
  const elementRef = useRef<T>(null);

  const smoothScrollIntoView = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const instantScrollIntoView = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }

  return { 
    elementRef, 
    smoothScrollIntoView, 
    instantScrollIntoView
   }
};

export default useScrollIntoView;
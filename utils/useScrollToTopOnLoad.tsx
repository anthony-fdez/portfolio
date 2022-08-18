import { useEffect } from "react";

export const useScrollToTopOnLoad = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window) {
        window.scrollTo(0, 0);
      }
    }, 10);
  }, []);

  return null;
};

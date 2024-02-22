import { useEffect } from "react";

export const useScrollToTopOnLoad = () => {
  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (window) {
        window.scrollTo(0, 0);
      }
    }, 10);
  }, []);

  return null;
};

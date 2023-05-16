import { useEffect, useState } from "react";

const useIsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return isLoaded;
};

export default useIsLoaded;

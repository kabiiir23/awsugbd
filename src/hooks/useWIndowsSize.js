import { useEffect, useState } from 'react';

export default function useWindowSize() {
  function currentSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(currentSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(currentSize);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

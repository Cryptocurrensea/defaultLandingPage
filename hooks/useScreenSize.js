import { useEffect, useState } from 'react';

export function useScreenSize(){
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = (event) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return width;
}
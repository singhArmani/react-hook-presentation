import { useState, useEffect } from 'react';

export function useMouseLocation() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handler(event) {
    const { clientX, clientY } = event;
    setMouseX(clientX);
    setMouseY(clientY);
  }
  useEffect(() => {
    window.addEventListener('mousemove', handler);

    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return [mouseX, mouseY];
}

export function useWindowWidth(initialWidth) {
  const [width, setWidth] = useState(initialWidth);

  function handler(event) {
    const { innerWidth } = event.target;
    setWidth(innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return [width];
}

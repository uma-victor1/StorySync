import { useEffect, useState } from "react";

const useCursorCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return coordinates;
};

export default useCursorCoordinates;

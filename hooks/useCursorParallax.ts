import { useMotionValue, useTransform } from "framer-motion";
import useCursorCoordinates from "./useCursorCoordinates";
import { useEffect } from "react";

const useCursorParallax = (rangeValue: number = 2800) => {
  const { x, y } = useCursorCoordinates();

  const motionX = useMotionValue(x);
  const motionY = useMotionValue(y);

  const transformX = useTransform(motionX, [0, rangeValue], [0, 100]);
  const transformY = useTransform(motionY, [0, rangeValue], [0, 100]);

  // const customTransform = (rangeValue: number = 2800) => {
  //   const transformX = useTransform(motionX, [0, rangeValue], [0, 100]);
  //   const transformY = useTransform(motionY, [0, rangeValue], [0, 100]);

  //   return {
  //     x: transformX,
  //     y: transformY,
  //   };
  // };

  useEffect(() => {
    motionX.set(x);
    motionY.set(y);
  }, [x, y]);

  return {
    transformX,
    transformY,
    // customTransform,
  };
};

export default useCursorParallax;

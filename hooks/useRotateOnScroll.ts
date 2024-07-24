import { MotionValue, useTransform } from "framer-motion";

const useRotateOnScroll = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export default useRotateOnScroll;

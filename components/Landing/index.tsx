"use client";
import React, { useRef } from "react";
import { Button } from "../index";
import {
  ArrowRight,
  DocumentText,
  Edit,
  LampCharge,
  Note,
} from "iconsax-react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import useCursorParallax from "@/hooks/useCursorParallax";

const Landing = () => {
  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };

  const useRotateOnScroll = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const useYParallax = (val: number) => useParallax(scrollYProgress, val);
  const { transformX: tx, transformY: ty } = useCursorParallax(3000);
  return (
    <header className="hero-section site-section overflow-x-clip">
      <div className="relative z-10 flex h-[50rem] w-full  items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          <div className="wrapper relative flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center gap-4 md:min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-2.5rem)]">
            <h1 className="max-w-9xl bg-halo-night bg-clip-text text-center text-5xl font-bold leading-none text-transparent lg:text-7xl 2xl:text-9xl">
              Your best <br /> growth content partner
            </h1>
            <p className="mb-8 text-center text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
              We are committed to helping you drive growth by creating engaging
              and impactful content tailored to your business or product needs.
            </p>
            {/* cta */}
            <div className="flex items-center gap-4">
              <Button text="Learn More" color="purple" />

              <Button
                text="Join Us"
                color="ghost"
                hasIcon={true}
                isFlexInv={true}
                className="bg-white bg-opacity-80"
                icon={
                  <ArrowRight
                    variant="TwoTone"
                    className="h-5 w-5 text-slate-600 md:h-6 md:w-6"
                  />
                }
              />
            </div>
          </div>
        </p>
      </div>
    </header>
  );
};

export default Landing;

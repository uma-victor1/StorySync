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
      <div className="wrapper relative flex min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-2.5rem)] flex-col items-center justify-center gap-4">
        <h1 className="max-w-9xl bg-halo-night bg-clip-text text-center text-5xl font-bold leading-none text-transparent lg:text-7xl 2xl:text-9xl">
          Your best <br /> growth content partner
        </h1>
        <p className="max-w-3xl text-center text-xl text-slate-700 lg:text-2xl">
          We are committed to helping you drive growth by creating engaging and
          impactful content tailored to your business or product needs
        </p>
        {/* cta */}
        <div className="flex items-center gap-4">
          <Button text="Learn More" color="purple" />

          <Button
            text="Join Us"
            color="ghost"
            hasIcon={true}
            isFlexInv={true}
            icon={
              <ArrowRight
                variant="TwoTone"
                className="h-5 md:h-6 w-5 md:w-6 text-slate-600"
              />
            }
          />
        </div>
        <div className="absolute bottom-0 flex h-[60px] md:h-[90px] w-8 justify-center rounded-full bg-yellow-100 pt-2">
          {/* scroll down */}
          <div className="animate-scroll h-4 md:h-7 w-2 md:w-3 rounded-full bg-yellow-400"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={ref}
          style={{
            x: tx,
            y: ty,
          }}
          className="absolute"
        >
          <motion.div
            className="ilstrtn left-[-12rem] top-[-20rem] lg:left-[-30rem] lg:top-[-14rem]"
            style={{ y: useYParallax(-200) }}
          >
            <Edit className="h-16 w-16 text-purple-600" variant="Bulk" />
          </motion.div>
          <motion.div
            className="ilstrtn left-[9rem] top-[22rem] lg:left-[26rem]"
            style={{ y: useYParallax(200) }}
          >
            <DocumentText
              className="h-16 w-16 text-purple-600"
              variant="Bulk"
            />
          </motion.div>
          <motion.div
            className="ilstrtn left-[11rem] top-[2rem] lg:left-[38rem] lg:top-[12rem]"
            style={{ y: useYParallax(100) }}
          >
            <LampCharge className="h-16 w-16 text-yellow-400" variant="Bulk" />
          </motion.div>
          <motion.div
            className="ilstrtn left-[-38rem] top-[12rem]"
            style={{ y: useYParallax(50) }}
          >
            <Note className="h-16 w-16 text-yellow-400" variant="Bulk" />
          </motion.div>
          <motion.div
            style={{
              y: useYParallax(600),
            }}
            className="ilstrtn circle left-[-10rem] top-[20rem] h-10 w-10 rounded-full bg-yellow-400"
          ></motion.div>
          <motion.div
            style={{
              y: useYParallax(0),
            }}
            className="ilstrtn circle left-[20rem] top-[-15rem] h-10 w-10 rounded-full bg-yellow-400"
          ></motion.div>
          <motion.div
            style={{
              y: useYParallax(500),
              rotate: useRotateOnScroll(scrollYProgress, 360),
            }}
            className="ilstrtn square left-[-12rem] top-[26rem] h-10 w-10 rounded-lg bg-purple-600 lg:left-[-30rem]"
          ></motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Landing;

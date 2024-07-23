"use client";
import React from 'react'

const AboutHeader = () => {
  return (
    <section className=' flex items-center flex-col justify-center gap-4 md:gap-10 lg:h-screen h-[30vh] md:h-[50vh] mt-52 md:mt-24 lg:pt-16 lg:mt-0'>
      <h1 className='text-slate-500 text-base uppercase tracking-widest font-medium'>
        About StorySync
      </h1>
      <h2 className='text-slate-800 text-2xl max-w-sm md:text-5xl lg:text-7xl md:max-w-4xl text-center'>The topic-expert copywriting company</h2>
      <p className='text-slate-600 text-sm md:text-base lg:text-lg max-w-sm md:max-w-xl lg:max-w-3xl text-center'>StorySync began its journey in 2024, setting out to become the world’s best solution for top-tier content written by dependable subject-matter experts.</p>
    </section>
  )
}

export default AboutHeader
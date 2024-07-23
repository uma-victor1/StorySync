"use client";
import React from 'react'

const BlogHeader = () => {
  return (
    <section className=' flex items-center flex-col justify-center gap-4 md:gap-10 h-[30vh] md:h-[50vh] mt-52 md:mt-24 lg:pt-16'>
      <h1 className='text-slate-500 text-base uppercase tracking-widest font-medium'>
        The StorySync Blog
      </h1>
      <h2 className='text-slate-800 text-2xl max-w-sm md:text-5xl lg:text-7xl md:max-w-5xl text-center'>Learn from our content experts</h2>
      <p className='px-2 md:px-0 text-slate-600 text-sm md:text-base lg:text-lg max-w-sm md:max-w-xl lg:max-w-3xl text-center'>From writing to publishing, our expert team answers the biggest questions in the online content community.</p>
    </section>
  )
}

export default BlogHeader
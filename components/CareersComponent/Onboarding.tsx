"use client";
import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player';


const Onboarding = () => {
  return (
    <section className='flex flex-col items-center gap-4 wrapper__sm lg:wrapper__md'>
      <Image src='/images/world.svg' alt='globe image' width={500} height={300} className='w-full' />
      <div className='w-full flex justify-center'>
        <ReactPlayer
          controls={true}
          playing={true}
          muted={true}
          url="https://www.youtube.com/watch?v=uO27ZBiUipQ"
          className='!w-full md:!w-3/4 !h-52  md:!h-96'
        />
      </div>
    </section>
  )
}

export default Onboarding
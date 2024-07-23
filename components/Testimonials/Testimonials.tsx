"use client";
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  const testimonials: testimonialProps[] = [
    {
      img: '/images/test.png',
      name: 'John Doe',
      designation: 'CEO',
      review:
        "Working with StorySync was a game-changer for XYZ Tech Solutions. Their copywriting prowess transformed our brand narrative, and the impact on audience engagement has been nothing short of remarkable. We're thrilled with the results!.",
    },
    {
      img: '/images/test.png',
      name: 'Jane Doe',
      designation: 'CTO',
      review:
        "Working with StorySync was a game-changer for XYZ Tech Solutions. Their copywriting prowess transformed our brand narrative, and the impact on audience engagement has been nothing short of remarkable. We're thrilled with the results!.",
    },
    {
      img: '/images/test.png',
      name: 'John Doe',
      designation: 'CEO',
      review:
        "Working with StorySync was a game-changer for XYZ Tech Solutions. Their copywriting prowess transformed our brand narrative, and the impact on audience engagement has been nothing short of remarkable. We're thrilled with the results!.",
    },
    {
      img: '/images/test.png',
      name: 'Jane Doe',
      designation: 'CTO',
      review:
        "Working with StorySync was a game-changer for XYZ Tech Solutions. Their copywriting prowess transformed our brand narrative, and the impact on audience engagement has been nothing short of remarkable. We're thrilled with the results!.",
    },
    {
      img: '/images/test.png',
      name: 'John Doe',
      designation: 'CEO',
      review:
        "Working with StorySync was a game-changer for XYZ Tech Solutions. Their copywriting prowess transformed our brand narrative, and the impact on audience engagement has been nothing short of remarkable. We're thrilled with the results!.",
    },
    {
      img: '/images/test.png',
      name: 'Jane Doe',
      designation: 'CTO',
      review:
        "Working with StorySync was a game-changer for XYZ Tech Solutions. Their copywriting prowess transformed our brand narrative, and the impact on audience engagement has been nothing short of remarkable. We're thrilled with the results!.",
    },
  ]
  return (
    <section className='wrapper__sm xl:wrapper__md mt-24 md:mt-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12'>
        {/* lets hear some nice words */}
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-2xl text-center md:text-left md:text-[50px] bg-clip-text text-transparent bg-halo-night leading-[48px]'>let&apos;s hear some nice words</h2>
          <p className=" text-slate-600 text-xs text-center md:text-left md:text-2xl">Our clients are the best so it fill our hearts with joy to hear the amazing things they have to say.</p>
        </div>
        {/* testimonials */}
        {testimonials.map((testimonial, index) => (
          <div key={index} className='rounded-[32px] p-6 md:p-8 xl:p-10 border bg-slate-50 border-slate-200 flex flex-col gap-4'>
            <Image src={testimonial.img} alt='testimonial image' width={100} height={100} className='rounded-full' />
            <p className='text-base text-slate-600'>{testimonial.review}</p>
            <div className='mt-4'>
              <p className='text-base text-slate-600'>{testimonial.name}</p>
              <p className='text-base font-bold text-slate-600'>{testimonial.designation}</p>
            </div>
          </div>
        )
        )}
      </div>
    </section>
  )
}

export default Testimonials
"use client"
import Image from 'next/image'
import React from 'react'

const Cards = ({ img, title, desc }: SellingCardProps) => {
  return (
    <div className='flex flex-row lg:flex-col items-center gap-6 border border-slate-200 rounded-2xl p-6 md:pb-10'>
      <Image src={img} alt={title} width={50} height={50} className='w-60 h-60 lg:w-full hidden md:inline-block flex-1' />
      <div className='px-3 flex flex-col gap-2'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='text-base text-slate-500'>{desc}</p>
      </div>
    </div>
  )
}

const SellingCards = () => {
  const dummyData: SellingCardProps[] = [
    {
      img: '/images/remote.svg',
      title: 'Work from your comfort zone',
      desc: 'Work from anywhere in the world, at allocated times within your timezone. We believe in the power of remote work and the freedom it brings to our team members.'
    },
    {
      img: '/images/progress.svg',
      title: 'Career growth',
      desc: 'We believe in the growth of our team members. We provide opportunities for growth and development to help you reach your full potential.'
    },
    {
      img: '/images/remote.svg',
      title: 'Get rewarded fairly',
      desc: 'We believe in rewarding our team members fairly. We offer competitive salaries and benefits to ensure that you are well compensated.'
    }
  ]
  return (
    <section className='wrapper__sm 2xl:wrapper__md flex flex-col gap-8 mt-32'>
      <h2 className='text-4xl font-semibold text-center mb-8'>Why work with us?</h2>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {dummyData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default SellingCards
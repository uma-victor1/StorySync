'use client';
import { SmsStar } from 'iconsax-react';
import React, { useState } from 'react'


const Readers = () => {
  const [subscriber, setSubscriber] = useState('')
  return (
    <section className='wrapper__sm md:wrapper__md bg-purple-50 border border-purple-300 rounded-[32px] mt-16 md:mt-24'>
      <div className='mx-4 md:wrapper__sm xl:wrapper__md py-12 md:py-32 flex items-center justify-between gap-8 xl:gap-0 flex-col md:flex-row'>
        <div className='flex flex-col gap-6'>
          <p className='font-bold text-purple-700 text-3xl md:text-4xl xl:text-6xl'>Join 200+ readers</p>
          <p className='text-purple-600 text-sm md:text-base max-w-sm'>Subscribe to our newsletter and be the first to know about our latest news, updates and offers.</p>
          <div className='bg-purple-200 border-purple-200 border rounded-lg'>
            <div className="flex items-center gap-2 justify-between">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent w-full search__keyword border-none focus:outline-none ml-3 xl:ml-7"
                value={subscriber}
                onChange={(e) => setSubscriber(e.target.value)}
              />
              <button className='px-4 xl:px-6 py-2 md:py-3 rounded-lg bg-purple-800 text-purple-200 text-base md:text-lg'>Subscribe</button>
            </div>
          </div>
        </div>
        {/* star */}
        <SmsStar variant='Bulk' className="text-purple-700 h-56 lg:h-96 w-56 lg:w-96" />
      </div>
    </section>
  )
}

export default Readers;
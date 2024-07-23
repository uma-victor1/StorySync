'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from 'iconsax-react';

const Footer = () => {
  const [subscriber, setSubscriber] = useState('');
  // temporary links
  const links = [
    'About',
    'Help',
    'Company',
    'Help Center',
    'Leadership',
    'Support Team',
    'Careers',
    'Community',
    'Blog',
    'Security FAQs'
  ]
  return (
    <section className='bg-purple-800 px-10 2xl:px-[126px] gap-28 mt-48 flex py-24 flex-col w-full'>
      <div className='flex justify-between flex-col gap-16 lg:gap-0 lg:flex-row'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16'>
          <div className='flex gap-6 flex-col'>
            <Image src='/images/logo-footer.png' width={50} height={30} alt='logo' className='w-[147px] h-[32px]' />
            <p className='text-purple-50 text-base max-w-xs'>We are committed to helping you drive growth by creating engaging and impactful content tailored to your business or product needs</p>
          </div>
          <div className='grid grid-cols-2 gap-x-8 2xl:gap-x-16 gap-y-4 text-purple-50 w-max'>
            {/* links */}
            {
              links.map((link, index) => (
                <p key={index} className={`text-white text-base w-max`}>{link}</p>
              ))
            }
          </div>
        </div>
        <div className=' shrink-0 flex flex-col gap-10'>
          {/* subscribe */}
          <p className='text-purple-50 font-bold text-base'>Subscribe for our latest news</p>
          <div className='bg-purple-50 border-purple-50 border rounded-lg min-w-[300px] 2xl:min-w-[370px]'>
            <div className="flex items-center gap-2 justify-between">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent w-full border-none focus:outline-none ml-3 xl:ml-4"
                value={subscriber}
                onChange={(e) => setSubscriber(e.target.value)}
              />
              <button className='px-4 xl:px-6 py-2 md:py-3 rounded-lg bg-purple-800 text-purple-200 text-base md:text-lg'>Subscribe</button>
            </div>
          </div>
          {/* socials */}
          <div className='flex items-center gap-4'>
            <p className='text-purple-50 text-base'>Follow us on</p>
            <div className='flex items-center gap-4'>
              <Image src='/images/LinkedinLogo.png' width={18} height={18} alt='linkedin' />
              <Image src='/images/TwitterLogo.png' width={18} height={18} alt='twitter' />
              <Image src='/images/InstagramLogo.png' width={18} height={18} alt='instagram' />
              <Image src='/images/YoutubeLogo.png' width={18} height={18} alt='youtube' />
            </div>
          </div>
        </div>
      </div>
      <div className='text-purple-50 text-base flex items-center flex-col gap-6 md:gap-0 md:flex-row justify-between'>
        {/* corporated */}
        <p>© 2024, StorySync Ltd.</p>
        <div className='flex gap-6'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
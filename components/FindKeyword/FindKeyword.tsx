"use client";
import React, { useState } from 'react'
import { SearchNormal1, StarSlash } from 'iconsax-react'
import Button from '../Button';
import Image from 'next/image';

const FindKeyword = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <section className='rounded-none md:rounded-[32px] mt-36 bg-slate-50 py-8 flex flex-col gap-12 items-center mx-0 lg:wrapper__md xl:wrapper__lg px-6 md:px-0 '>
      <div className='bg-purple-100 rounded-[12px] py-2 px-6 flex items-center gap-3 w-max'>
        <StarSlash className='text-purple-500 w-6 h-6' variant='Bold' />
        <p className='capitalize text-purple-500 text-lg font-bold'>Free Tool</p>
      </div>
      {/* find keyword ideas in seconds */}
      <div className='flex flex-col gap-2 items-center'>
        <p className='text-slate-800 font-bold text-3xl text-center md:text-left md:text-4xl xl:text-5xl'>Find keyword ideas in seconds</p>
        <p className='text-slate-800 text-sm md:text-base'>Boost SEO results with powerful keyword research</p>
      </div>
      <div className="w-full bg-purple-100 max-w-xl xl:max-w-[700px] border rounded-full border-purple-300 pl-4 pr-1 py-1">
        <div className="flex items-center gap-4 justify-between">
          <input
            type="string"
            placeholder="Find keyword"
            className="bg-transparent w-full search__keyword border-none focus:outline-none ml-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="p-1 rounded-full bg-modernblack-06">
            <Button text='Search' color='purple' hasIcon={true} icon={<SearchNormal1 className='w-6 h-6 text-white' variant='TwoTone' />} isFlexInv={true} />
          </div>
        </div>
      </div>
      {/* by semrush */}
      <div className='flex gap-2 items-center'>
        <p className='text-black font-bold text-lg md:text-xl'>By</p>
        <Image src={"/images/semrush.png"} alt='semrush' objectFit='cover' height={50} width={150} className='w-[203px] md:w-[263px] h-[50px] md:h-[70px] ' />
      </div>
    </section>
  )
}

export default FindKeyword
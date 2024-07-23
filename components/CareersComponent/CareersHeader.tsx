import React from 'react'
import Button from '../Button'

const CareersHeader = () => {
  return (
    <section className=' flex items-center flex-col justify-center gap-5 h-[30vh] md:h-[60vh] mt-52 md:mt-24 lg:pt-16'>
      <h1 className='text-slate-500 text-base uppercase tracking-widest font-medium'>
        we welcome you to
      </h1>
      <h2 className='text-slate-800 text-2xl max-w-sm md:text-5xl lg:text-7xl md:max-w-4xl text-center'>Join the team</h2>
      <p className='px-2 md:px-0 text-slate-600 text-sm md:text-base lg:text-lg max-w-sm md:max-w-xl lg:max-w-3xl text-center'>Help us pave a new way for first-class writers and editors to earn the freedom, stability and stature they deserve.</p>
      <a href='#job-openings'>
        <Button color='purple' text='Go to job openings' />
      </a>
    </section>
  )
}

export default CareersHeader
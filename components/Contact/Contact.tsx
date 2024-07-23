import React from 'react'
import Button from '../Button'

const Contact = () => {
  return (
    <section className='mx-0 md:wraper__sm lg:wrapper__md mt-16 md:mt-24'>
      <div className='px-4 md:px-16 xl:px-32 py-12 flex flex-col gap-4 items-center text-purple-50 bg-grainy bg-cover  bg-center rounded-none  md:rounded-[64px]'>
        <p className='capitalize font-bold text-4xl md:text-5xl lg:text-7xl'>Get in Touch</p>
        <p className='text-center text-xs md:text-sm 2xl:text-lg mb-4'>Ready to transform your brand narrative and elevate your content strategy? We&apos;re here to help. Whether you have questions, ideas, or are ready to kickstart your next project, our team at StorySync is eager to hear from you.Ready to transform your brand narrative and elevate your content strategy? We&apos;re here to help. Whether you have questions, ideas, or are ready to kickstart your next project, our team at StorySync is eager to hear from you.</p>
        <Button text='Contact Us' color='yellow' />
      </div>
    </section>
  )
}

export default Contact
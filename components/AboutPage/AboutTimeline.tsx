"use client";
import React from 'react'

const AboutTimeline = () => {

  const testTimeline: TimelineProps[] = [
    {
      date: 'March 2024',
      title: 'StorySync is born',
      desc: 'StorySync began its journey in 2024, setting out to become the world’s best solution for top-tier content written by dependable subject-matter experts.'
    },
    {
      date: 'March 2025',
      title: 'First 100 clients',
      desc: 'Now working with a range of ambitious scale-ups and publishers, Eleven has developed its service into an end-to-end content marketing solution, covering everything from ideation and strategy to writing, in-article graphics, and more. This allows Eleven to further ensure ROI for its clients, taking control of more of the contributing factors.'
    },
    {
      date: 'March 2026',
      title: 'First 1000 clients',
      desc: 'Now working with a range of ambitious scale-ups and publishers, Eleven has developed its service into an end-to-end content marketing solution, covering everything from ideation and strategy to writing, in-article graphics, and more. This allows Eleven to further ensure ROI for its clients, taking control of more of the contributing factors.'
    },
    {
      date: 'March 2027',
      title: 'First 10000 clients',
      desc: 'StorySync hit a milestone in 2027, acquiring its first 10000 clients. The company’s reputation for quality and reliability began to grow.'
    },
    {
      date: 'March 2027',
      title: 'First 10000 clients',
      desc: 'StorySync hit a milestone in 2027, acquiring its first 10000 clients. The company’s reputation for quality and reliability began to grow.'
    },
    {
      date: 'March 2027',
      title: 'First 10000 clients',
      desc: 'StorySync hit a milestone in 2027, acquiring its first 10000 clients. The company’s reputation for quality and reliability began to grow.'
    },
  ]
  return (
    <section className='wrapper__sm md:wrapper__md my-8'>
      <div className='w-full h-full grid-cols-2 relative timeline pb-12 hidden lg:grid'>
        {
          testTimeline.map((item, index) => {
            return (
              <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${index !== 0 && index % 2 !== 0 ? 'apply-mt' : "mt-0"} `} key={index}>
                <div className={`flex flex-col items-start gap-3 border-slate-200 border rounded-xl p-8`}>
                  <div className='bg-slate-100 font-medium text-slate-700 border px-5 py-3 rounded-full text-sm'>{item.date}</div>
                  <div className=' text-slate-700 text-xl font-semibold'>{item.title}</div>
                  <div className=' text-slate-700 text-sm'>{item.desc}</div>
                </div>
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className='border border-slate-200 w-10 ball-point relative'></div>
                  <div className={`h-5 w-5 border-2 border-white box-border ${index % 2 === 0 ? "-mr-[0.65rem]" : "-ml-[0.65rem]"} z-10 rounded-full bg-slate-200 flex items-center justify-center`}>
                    <div className='h-2 w-2 rounded-full bg-white'></div>
                  </div>
                </div>
              </div>
            )
          }
          )}
      </div>
      <div className=' flex lg:hidden flex-col items-center'>
        {
          testTimeline.map((item, index) => {
            return (
              <div className={`flex items-center flex-col w-full`} key={index}>
                <div className={`flex flex-col items-start gap-3 border-slate-200 border rounded-xl p-8`}>
                  <div className='bg-slate-100 font-medium text-slate-700 border px-5 py-3 rounded-full text-sm'>{item.date}</div>
                  <div className=' text-slate-700 text-xl font-semibold'>{item.title}</div>
                  <div className=' text-slate-700 text-sm'>{item.desc}</div>
                </div>
                <div className={`items-center ${index === testTimeline.length-1? 'hidden' : 'flex'}`}>
                  <div className='border-[0.1rem] border-slate-200 border-dashed h-10 relative'></div>
                </div>
              </div>
            )
          }
          )}
      </div>
    </section>
  )
}

export default AboutTimeline
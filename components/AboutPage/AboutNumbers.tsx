import React from 'react'

const AboutNumbers = () => {
  const testAbout: AboutNumProps[] = [
    {
      number: '1000+',
      title: 'Projects Completed'
    },
    {
      number: '100+',
      title: 'Subject-Matter Experts'
    },
    {
      number: '50+',
      title: 'Industries Served'
    },
    {
      number: '10+',
      title: 'Years of Experience'
    }

  ]
  return (
    <section className='bg-bg-lined bg-cover bg-top py-10'>
      <div className='my-16 flex justify-center wrapper__sm  md:wrapper__md lg:wrapper__lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {
            testAbout.map((item, index) => {
              return (
                <div className={`flex border border-slate-300 flex-col text-center md:text-left lg:items-center justify-center p-8 `} key={index}>
                  <div className='text-4xl font-semibold text-slate-800'>{item.number}</div>
                  <div className='text-slate-600 text-base'>{item.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default AboutNumbers
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import Link from 'next/link'

const CareersMission = () => {
  const mission: ourMissionProps = {
    title: 'Our Mission',
    desc: 'Our mission is to help businesses grow by providing them with the best possible solutions. We believe in the power of technology and design, and we are committed to making the world a better place through our work.',
    img: '/images/img1.png',
    cta: 'Learn more about us'
  }
  return (
    <section className="wrapper__sm md:wrapper__md 2xl:wrapper__lg my-36">
      <div className='flex justify-between flex-col-reverse lg:flex-row items-start lg:items-center gap-12'>
        <div className='flex flex-col gap-12'>
          <div className='text-4xl font-semibold text-slate-800'>{mission.title}</div>
          <div className='text-lg text-slate-600'>{mission.desc}</div>
          <Link href='/about'>
            <Button
              text={mission.cta}
              color='ghost'
              className='w-max'
            />
          </Link>

        </div>
        <div className='p-3 rounded-2xl border border-slate-300 shrink-0'>
          {/* image */}
          <Image src={mission.img} alt='mission' width={500} height={500} className='w-[28rem] h-[15rem] md:h-[17.5rem] ' />
        </div>
      </div>
    </section>
  )
}

export default CareersMission
import React from 'react'
import Button from '../Button'
import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'

const JoinCommunity = () => {
  return (
    <section className='mt-20 relative py-32 2xl:py-72 wrapper__sm md:wrapper__md bg-yellow-50 rounded-[32px]'>
      <div className='mx-6 md:wrapper__sm lg:wrapper__md flex flex-col items-center 2xl:items-start gap-6'>
        <p className='font-bold text-yellow-700 text-center 2xl:text-left text-2xl md:text-4xl 2xl:text-6xl max-w-full 2xl:max-w-[720px]'>Grow, learn, build, and create with a community, of writers</p>
        <div className='w-max'>
          <Button text='Join the Community' color='yellow' hasIcon={true} icon={<ArrowRight className='w-6 h-6 text-yellow-700' variant='TwoTone' />} isFlexInv={true} />
        </div>
      </div>
      <Image src={"/images/group.png"} alt='community' objectFit='cover' height={500} width={500} className="w-[699px] h-[870px] hidden 2xl:block absolute -top-9 right-0 -mr-[126px]"/>
    </section>
  )
}

export default JoinCommunity
import React from 'react';
import SectionHeaders from '../SectionHeaders';
import Cards from './Cards';

const OurProcess = () => {
  const cardInfo = [
    {
      title: 'Copywriting',
      img: '/images/img1.png',
      bulletPoints: ['Define your brand: voice and captivate your audience through meticulously crafted copy that tells your unique story.', 'Iteratively refine your copy, ensuring clarity, impact, and resonance with your target audience.'],
    },
    {
      title: 'Design',
      img: '/images/img2.png',
      bulletPoints: ['Define your brand: voice and captivate your audience through meticulously crafted copy that tells your unique story.', 'Iteratively refine your copy, ensuring clarity, impact, and resonance with your target audience.'],
    },
    {
      title: 'Develop',
      img: '/images/img3.png',
      bulletPoints: ['Define your brand: voice and captivate your audience through meticulously crafted copy that tells your unique story.', 'Iteratively refine your copy, ensuring clarity, impact, and resonance with your target audience.'],
    },
  ]
  return (
    <section className='mt-16 flex flex-col gap-16 md:gap-24 wrapper__sm lg:wrapper__md 2xl:wrapper__lg'>
      <SectionHeaders title='Our Strategic Creative Process' subtitle='Innovative, precise, and collaborative—transforming concepts into success stories.' />
      {/* cards */}
      {cardInfo.map((card, index) => (
        <Cards key={index} title={card.title} img={card.img} bulletPoints={card.bulletPoints} index={index} />
      )
      )}
    </section>
  )
}

export default OurProcess;
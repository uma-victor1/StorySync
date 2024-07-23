"use client"
import React from 'react'
import Carousel from 'react-multi-carousel'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './Embla'

const TeamTestimonial = () => {
  const dummyTeamData: TeamTestimonialProps[] = [
    {
      name: 'John Doe',
      designation: 'Software Engineer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget ante. Donec nec nunc nec purus tincidunt tincidunt. Donec nec nunc nec purus tincidunt tincidunt.',
      img: '/images/test.png'
    },
    {
      name: 'Jane Doe',
      designation: 'Software Engineer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget ante. Donec nec nunc nec purus tincidunt tincidunt. Donec nec nunc nec purus tincidunt tincidunt.',
      img: '/images/test.png'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget ante. Donec nec nunc nec purus tincidunt tincidunt. Donec nec nunc nec purus tincidunt tincidunt.',
      img: '/images/test.png'
    },
    {
      name: 'Jane Doe',
      designation: 'Software Engineer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget ante. Donec nec nunc nec purus tincidunt tincidunt. Donec nec nunc nec purus tincidunt tincidunt.',
      img: '/images/test.png'
    },
    {
      name: 'John Doe',
      designation: 'Software Engineer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget ante. Donec nec nunc nec purus tincidunt tincidunt. Donec nec nunc nec purus tincidunt tincidunt.',
      img: '/images/test.png'
    },
  ]
  return (
    <div>
      <EmblaCarousel slides={dummyTeamData} />
    </div>
  )
}

export default TeamTestimonial
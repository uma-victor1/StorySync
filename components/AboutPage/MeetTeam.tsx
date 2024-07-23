import { Facebook } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

const MeetTeam = () => {
  const teamTest: TeamMemberCardProps[] = [
    {
      img: "/images/team.jpg",
      "name": "John Doe",
      "designation": "Director, Co-founder",
      "socialLinks": [
        {
          "icon": <Facebook variant='Bold' className='h-8 w-8 text-blue-600' />,
          link: ""
        }
      ]
    },
    {
      img: "/images/team.jpg",
      "name": "John Doe",
      "designation": "Director, Co-founder",
      "socialLinks": [
        {
          "icon": <Facebook variant='Bold' className='h-8 w-8 text-blue-600' />,
          link: ""
        }
      ]
    },
    {
      img: "/images/team.jpg",
      "name": "John Doe",
      "designation": "Director, Co-founder",
      "socialLinks": [
        {
          "icon": <Facebook variant='Bold' className='h-8 w-8 text-blue-600' />,
          link: ""
        }
      ]
    },
    {
      img: "/images/team.jpg",
      "name": "John Doe",
      "designation": "Director, Co-founder",
      "socialLinks": [
        {
          "icon": <Facebook variant='Bold' className='h-8 w-8 text-blue-600' />,
          link: ""
        }
      ]
    },
    {
      img: "/images/team.jpg",
      "name": "John Doe",
      "designation": "Director, Co-founder",
      "socialLinks": [
        {
          "icon": <Facebook variant='Bold' className='h-8 w-8 text-blue-600' />,
          link: ""
        }
      ]
    },
    {
      img: "/images/team.jpg",
      "name": "John Doe",
      "designation": "Director, Co-founder",
      "socialLinks": [
        {
          "icon": <Facebook variant='Bold' className='h-8 w-8 text-blue-600' />,
          link: ""
        }
      ]
    },

  ]
  return (
    <section className='wrapper__sm 2xl:wrapper__md flex flex-col items-center mt-24 gap-24'>
      <div className='text-center space-y-3'>
        <h1 className='uppercase tracking-widest font-medium text-slate-500'>About us</h1>
        <h2 className='font-medium text-2xl text-slate-900'>Meet our awesome team</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
        {
          teamTest.map((item, index) => (
            <div key={index} className='p-2 w-max border border-slate-200 flex flex-col gap-2 rounded-md bg-slate-50'>
              <Image src={item.img} alt={item.name} width={280} height={300} className='rounded-t-md' />
              <p className=' font-medium text-lg text-slate-900'>{item.name}</p>
              <p className=' text-slate-500'>{item.designation}</p>
              <div className='flex gap-3'>
                {
                  item.socialLinks.map((link, index) => (
                    <a key={index} href={link.link} target='_blank' rel='noreferrer'>
                      {link.icon}
                    </a>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default MeetTeam
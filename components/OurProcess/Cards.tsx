import React from 'react'


const Cards = ({ title, img, bulletPoints, index }: cardProps) => {
  return (
    <div className={`flex justify-center gap-6 md:gap-0 ${index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}`}>
      <div className={`flex ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'} flex-col gap-0 xl:gap-5 w-full md:w-3/5`}>
        <h2 className='font-bold text-2xl md:text-3xl xl:text-5xl text-left w-full md:max-w-[75%] bg-clip-text text-transparent bg-halo-night leading-normal'>{title}</h2>
        <div className='flex flex-col gap-4 w-full md:max-w-[75%]'>
          {bulletPoints.map((point, index) => (
            <ul className='card-bullet ml-6' key={index}>
              <li className='text-base xl:text-2xl list-outside'>{point}</li>
            </ul>
          )
          )}
        </div>
      </div>
      <div className='w-full md:w-2/5'>
        <img src={img} alt='card' className='w-full h-full object-cover rounded-3xl' />
      </div>
    </div>
  )
}

export default Cards
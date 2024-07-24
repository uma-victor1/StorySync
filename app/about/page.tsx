import AboutHeader from '@/components/AboutPage/AboutHeader';
import AboutMission from '@/components/AboutPage/AboutMission';
import AboutNumbers from '@/components/AboutPage/AboutNumbers';
import AboutTimeline from '@/components/AboutPage/AboutTimeline';
import MeetTeam from '@/components/AboutPage/MeetTeam';
import Readers from '@/components/Readers/Readers';
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-8'>
      <AboutHeader/>
      <AboutTimeline/>
      <AboutNumbers/>
      <AboutMission/>
      <MeetTeam/>
      <Readers/>
    </div>

  )
}

export default page
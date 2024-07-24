import React from 'react'
import CareersHeader from '@/components/CareersComponent/CareersHeader'
import Onboarding from '@/components/CareersComponent/Onboarding'
import dynamic from 'next/dynamic';
import SellingCards from '@/components/CareersComponent/SellingCards';
import CareersMission from '@/components/CareersComponent/CareersMission';
import HearFromTeam from '@/components/CareersComponent/HearFromTeam';

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/CareersComponent/Onboarding'), {
  ssr: false
});

const page = () => {
  return (
    <main className='flex flex-col gap-8'>
      <CareersHeader />
      <DynamicComponentWithNoSSR />
      <SellingCards/>
      <CareersMission/>
      <HearFromTeam/>
    </main>
  )
}

export default page
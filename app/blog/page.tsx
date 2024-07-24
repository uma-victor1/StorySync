import BlogHeader from '@/components/BlogComponents/BlogHeader'
import BlogList from '@/components/BlogComponents/BlogList'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-8'>
      <BlogHeader/>
      <BlogList/>
    </div>
  )
}

export default page
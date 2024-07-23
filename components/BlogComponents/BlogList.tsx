"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Button from '../Button'
import { SearchNormal1 } from 'iconsax-react'
import Image from 'next/image'



const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const tabList: blogsCategoriesProps[] = [
    {
      title: 'Most Recent'
    },
    {
      title: 'Content Marketing'
    },
    {
      title: 'SEO'
    },
    {
      title: 'Copywriting'
    }
  ]


  const blogList: BlogListProps[] = [
    {
      tag: 'Content Marketing',
      title: 'How to write a blog post that converts 1',
      date: 'August 12, 2022',
      author_name: 'John Doe',
      author_img: 'https://randomuser.me/api/portraits/lego/1.jpg',
      desc: 'This article will teach you how to write a blog post that converts. We will cover everything from the basics of writing a blog post to advanced techniques that will help you get more traffic and conversions. Whether you are a beginner or an experienced blogger, this article is for you. So let’s get started!'
    },
    {
      tag: 'Content Marketing',
      title: 'The ultimate guide to content marketing using social media and SEO strategies for 2022 and beyond 2',
      date: 'August 12, 2022',
      author_name: 'John Doe',
      author_img: 'https://randomuser.me/api/portraits/lego/1.jpg',
      desc: 'This article focuses on the ultimate guide to content marketing using social media and SEO strategies for 2022 and beyond. It covers everything from the basics of content marketing to advanced techniques that will help you get more traffic and conversions. Whether you are a beginner or an experienced marketer, this article is for you. So let’s get started!'
    },
    {
      tag: 'SEO',
      title: 'SEO for beginners 3',
      date: 'August 12, 2022',
      author_name: 'John Doe',
      author_img: 'https://randomuser.me/api/portraits/lego/1.jpg',
      desc: 'This article focuses on SEO for beginners. It covers everything from the basics of SEO to advanced techniques that will help you get more traffic and conversions. Whether you are a beginner or an experienced marketer, this article is for you. So let’s get started!'
    },
    {
      tag: 'Copywriting',
      title: 'The ultimate guide to copywriting 4',
      date: 'August 12, 2022',
      author_name: 'John Doe',
      author_img: 'https://randomuser.me/api/portraits/lego/1.jpg',
      desc: 'This article drives the adoption of the ultimate guide to copywriting. It covers everything from the basics of copywriting to advanced techniques that will help you get more traffic and conversions. Whether you are a beginner or an experienced marketer, this article is for you. So let’s get started!'
    },
    {
      tag: 'Copywriting',
      title: 'The ultimate guide to copywriting 5',
      date: 'August 12, 2022',
      author_name: 'John Doe',
      author_img: 'https://randomuser.me/api/portraits/lego/1.jpg',
      desc: 'This article '
    },
  ]
  return (
    <section className=' wrapper__sm md:wrapper__md flex justify-center'>
      <Tabs defaultValue={tabList[0]?.title} className="w-full flex items-center flex-col">
        <TabsList className='gap-6 flex-col lg:flex-row h-full w-full lg:w-max p-3 rounded-3xl lg:rounded-full max-w-4xl flex-wrap mb-16'>
          {tabList.map((tab, index) => (
            <TabsTrigger key={index} value={tab.title} className='rounded-full text-xl py-3 px-8 w-full lg:w-max'>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={tabList[0]?.title} className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
          {blogList.toSpliced(2).map((blog, index) => (
            <div key={index} className="flex group bg-[url('/images/lined.jpg')] bg-cover bg-no-repeat bg-top bg-opacity-50 overflow-hidden relative flex-col grow gap-4 hover:cursor-pointer hover:shadow-md transition-all ease-in-out hover:scale-105 p-4 border border-gray-200 rounded-xl">
              <p className='text-purple-700 font-medium'>{blog.tag}</p>
              <div className='flex-1'>
                <h3 className='text-slate-800 text-lg md:text-2xl font-medium'>{blog.title}</h3>
                <p className='text-slate-600 text-sm'>{blog.date}</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src={blog.author_img} alt={blog.author_name} className='w-12 h-12 rounded-full' />
                <div>
                  <p className='text-slate-600 text-xs'>Written by</p>
                  <p className='text-slate-800 font-medium'>{blog.author_name}</p>
                </div>
              </div>
              <div className="absolute inset-0 hidden md:flex items-start justify-start w-full h-3/5 bg-black bg-opacity-50 opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-4 text-white">
                  <p className="mt-2 text-sm line-clamp-4">{blog.desc}</p>
                </div>
              </div>
            </div>
          ))}
          {/* retunr banner in-between grids */}
          <div className="flex-col flex 2xl:flex-row items-start 2xl:items-center justify-center col-span-1 lg:col-span-2 my-12 border border-slate-200 rounded-md p-3 md:p-5 md:justify-between gap-4">
            <div className='grow flex flex-col gap-5 w-full md:gap-8'>
              <h3 className='text-2xl md:text-3xl font-medium capitalize'>Find Unique Keywords</h3>
              <p className='text-slate-500 text-base'>Find the best keywords ideas for your website</p>
              <div className="w-full bg-purple-100 max-w-full md:max-w-[700px] border rounded-full border-purple-300 pl-4 pr-1 py-1">
                <div className="flex items-center gap-4 w-full justify-between">
                  <input
                    type="string"
                    placeholder="Find keyword"
                    className="bg-transparent w-full  search__keyword border-none focus:outline-none ml-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="p-1 rounded-full bg-modernblack-06">
                    <Button text='Search' color='purple' hasIcon={true} icon={<SearchNormal1 className='w-6 h-6 text-white' variant='TwoTone' />} isFlexInv={true} />
                  </div>
                </div>
              </div>
              {/* by semrush */}
              <div className='flex gap-2 items-center'>
                <p className='text-black font-bold text-lg md:text-xl'>By</p>
                <Image src={"/images/semrush.png"} alt='semrush' objectFit='cover' height={50} width={150} className='w-[150px] h-[50px] ' />
              </div>
            </div>
            <Image src="/images/undraw.svg" alt="banner" height={50} width={150} className="w-full h-52 md:h-96 object-cover rounded-xl" />
          </div>

          {/* continue other blog cards minus the first two */}
          {blogList.toSpliced(0, 2).map((blog, index) => (
            <div key={index} className="flex group bg-[url('/images/lined.jpg')] bg-cover bg-no-repeat bg-top bg-opacity-50 overflow-hidden relative flex-col grow gap-4 hover:cursor-pointer hover:shadow-md transition-all ease-in-out hover:scale-105 p-4 border border-gray-200 rounded-xl">
              <p className='text-purple-700 font-medium'>{blog.tag}</p>
              <div className='flex-1'>
                <h3 className='text-slate-800 text-lg md:text-2xl font-medium'>{blog.title}</h3>
                <p className='text-slate-600 text-sm'>{blog.date}</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src={blog.author_img} alt={blog.author_name} className='w-12 h-12 rounded-full' />
                <div>
                  <p className='text-slate-600 text-xs'>Written by</p>
                  <p className='text-slate-800 font-medium'>{blog.author_name}</p>
                </div>
              </div>
              <div className="absolute inset-0 hidden md:flex items-start justify-start w-full h-3/5 bg-black bg-opacity-50 opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-4 text-white">
                  <p className="mt-2 text-sm line-clamp-5">{blog.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value={tabList[1]?.title} className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
          {
            blogList.filter(blog => blog.tag.toLowerCase() === 'content marketing').map((blog, index) => (
              <div key={index} className="flex group bg-[url('/images/lined.jpg')] bg-cover bg-no-repeat bg-top bg-opacity-50 overflow-hidden relative flex-col grow gap-4 hover:cursor-pointer hover:shadow-md transition-all ease-in-out hover:scale-105 p-4 border border-gray-200 rounded-xl">
                <p className='text-purple-700 font-medium'>{blog.tag}</p>
                <div className='flex-1'>
                  <h3 className='text-slate-800 text-lg md:text-2xl font-medium'>{blog.title}</h3>
                  <p className='text-slate-600 text-sm'>{blog.date}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={blog.author_img} alt={blog.author_name} className='w-12 h-12 rounded-full' />
                  <div>
                    <p className='text-slate-600 text-xs'>Written by</p>
                    <p className='text-slate-800 font-medium'>{blog.author_name}</p>
                  </div>
                </div>
                <div className="absolute inset-0 hidden md:flex items-start justify-start w-full h-3/5 bg-black bg-opacity-50 opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="mt-2 text-sm line-clamp-4">{blog.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </TabsContent>
        <TabsContent value={tabList[2]?.title} className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
          {
            blogList.filter(blog => blog.tag.toLowerCase() === 'seo').map((blog, index) => (
              <div key={index} className="flex group bg-[url('/images/lined.jpg')] bg-cover bg-no-repeat bg-top bg-opacity-50 overflow-hidden relative flex-col grow gap-4 hover:cursor-pointer hover:shadow-md transition-all ease-in-out hover:scale-105 p-4 border border-gray-200 rounded-xl">
                <p className='text-purple-700 font-medium'>{blog.tag}</p>
                <div className='flex-1'>
                  <h3 className='text-slate-800 text-lg md:text-2xl font-medium'>{blog.title}</h3>
                  <p className='text-slate-600 text-sm'>{blog.date}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={blog.author_img} alt={blog.author_name} className='w-12 h-12 rounded-full' />
                  <div>
                    <p className='text-slate-600 text-xs'>Written by</p>
                    <p className='text-slate-800 font-medium'>{blog.author_name}</p>
                  </div>
                </div>
                <div className="absolute inset-0 hidden md:flex items-start justify-start w-full h-3/5 bg-black bg-opacity-50 opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="mt-2 text-sm line-clamp-4">{blog.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </TabsContent>
        <TabsContent value={tabList[3]?.title} className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
          {
            blogList.filter(blog => blog.tag.toLowerCase() === 'copywriting').map((blog, index) => (
              <div key={index} className="flex group bg-[url('/images/lined.jpg')] bg-cover bg-no-repeat bg-top bg-opacity-50 overflow-hidden relative flex-col grow gap-4 hover:cursor-pointer hover:shadow-md transition-all ease-in-out hover:scale-105 p-4 border border-gray-200 rounded-xl">
                <p className='text-purple-700 font-medium'>{blog.tag}</p>
                <div className='flex-1'>
                  <h3 className='text-slate-800 text-lg md:text-2xl font-medium'>{blog.title}</h3>
                  <p className='text-slate-600 text-sm'>{blog.date}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={blog.author_img} alt={blog.author_name} className='w-12 h-12 rounded-full' />
                  <div>
                    <p className='text-slate-600 text-xs'>Written by</p>
                    <p className='text-slate-800 font-medium'>{blog.author_name}</p>
                  </div>
                </div>
                <div className="absolute inset-0 hidden md:flex items-start justify-start w-full h-3/5 bg-black bg-opacity-50 opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="mt-2 text-sm line-clamp-4">{blog.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </TabsContent>
      </Tabs>

    </section>
  )
}

export default BlogList
import React from 'react'
import { useParams } from 'react-router-dom'
import { dataNews } from '../../data';

export const DetailNews = () => {

  const {id} = useParams();

  const newsItem = dataNews.find(news=>news.id === parseInt(id));

  return (
    <main className='h-full w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2  md:p-[100px] lg:p-[90px]'>
        <div className='px-12 pt-16 mx-auto grid gap-y-5 md:p-0 md:block lg:pr-0 xl:px-[40px] xl:py-3'>
          <img src={newsItem.img} alt='gambar' className='aspect-video md:mb-4 md:w-[520px]'/>
          <img src={newsItem.img1} alt='gambar' className='aspect-video mb-3 md:w-[520px]'/>
        </div>
        <div className='p-4 md:py-0  xl:p-0 xl:pr-10'>
          <h2 className='mb-6 font-semibold text-3xl'>{newsItem.judul}</h2>
          <p className='mb-4 text-justify md:text-sm lg:text-base'>{newsItem.desc}</p>
          <p className='mb-4 text-justify md:text-sm lg:text-base'>{newsItem.desc}</p>
          <p className='mb-4 text-justify md:text-sm lg:text-base'>{newsItem.desc}</p>
        </div>
      </div>
    </main>
  )
}

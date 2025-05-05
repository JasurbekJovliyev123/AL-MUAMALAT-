import React from 'react'
import { people } from '../constans'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const Partners = () => {
  return (
    <Swiper
    modules={[Autoplay]}
    slidesPerView={1}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
loop={true}
className="max-w-[980px] mt-[22px] mb-6 mx-auto"
>
{people.map((person, index) => (
<SwiperSlide key={index}>
  <div className='rounded-[10px] bg-[#D2E6E4] block md:flex items-center p-5 md:p-[35px] pr-7 md:pr-[81px]'>
    <img src={person.img} alt="person" className="md:mr-8  md:h-auto h-[180px] mx-auto" />
    <div>
      <p className='font-bold text-center text-lg md:text-[28px] mt-2 mb-4 md:mb-9'>{person.name}</p>
      <p className='md:text-[22px] text-center text-md md:leading-[30px] text-[#141B34] md:mb-9 mb-5'>{person.desc}</p>
      <div className='flex justify-center md:justify-self-start items-center gap-x-8'>
        {person.links.map((link, idx) => (
          <img src={link} alt="social" key={idx} className='cursor-pointer' />
        ))}
      </div>
    </div>
  </div>
</SwiperSlide>
))}
</Swiper>
  )
}

export default Partners

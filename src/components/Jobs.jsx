import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { logos } from '../constans'
const Jobs = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-8">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={5}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={2000}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        }
      }}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#F6F8F9] w-[120px] md:w-[280px] h-[70px] md:h-[139px] flex-wrap gap-x-0 md:gap-x-6 shadow-md rounded-[10px] flex items-center justify-center p-4">
            <img src={logo} alt="logo" className="max-h-[50px] object-contain" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
</div>
  )
}

export default Jobs

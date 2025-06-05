import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { logos } from '../constans';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { videos } from '../constans';
import {Consultation,Jobs,Partners,Services} from '../components/index'
import Questions from '../components/Questions';
import TestimonialCarousel from '../components/TestimonalsCarusel';
const Home = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };
  return (
   <>
     <div className='w-full h-[86vh] pt-10 relative bg-[#009688]'>
          <div className='max-w-[223px] absolute left-[45%] md:left-[53%] top-[5%] px-5 py-1.5 md:py-4 flex items-center gap-2 bg-white rounded-[20px]'>
                         <img className='md:w-10 w-6 h-8 md:h-10' src="./calendar.png" alt="" />
                         <p>
                            <p  className='text-[#595959] nunito-sans text-md  md:text-[24px] font-bold'>250k</p> 
                            <span className='text-[#545567] text-[12px] font-semibold inter -mt-2'>Assisted Student</span>
                         </p>
            </div>
         <div className='container grid md:grid-cols-2 grid-cols-1 items-center'>
          <div className='order-2 md:order-1'>
              <div className='bg-white max-w-[421px] inter text-[#252641] py-[10px] mb-5 md:mb-10 px-[25px] md:text-[17px] text-sm md:mt-0 mt-4 rounded-[10px]'>
                Seeking Knowledge is an Obligation in Islam
              </div>
              <p className='max-w-[723px] md:leading-[70px] text-center md:text-start inter font-bold text-2xl md:text-[36px] lg:text-[58px] mb-5 md:mb-10 text-white'>Enhance Your Understanding of Islamic Ethics with Al-Muamalat</p>
              <div>
                  <button className='bg-[#FD661F] inter text-white font-medium text-sm md:text-[16px] w-[160px] md:w-[244px] rounded-[10px] h-10 md:h-[59px]'>Students’ opnion</button>
              </div>
          </div>    
            <img className='block md:h-auto h-72 order-1 md:order-2' src="./person.png" alt="" />
         </div>
    </div>

    <div className='container pt-[50px] md:pt-[100px]'>
        <div className='max-w-[574px] mx-auto mb-[62px]'>
             <h3 className='text-center text-[24px] md:text-[40px] font-bold halvetica text-black mb-2.5'>Our services </h3>
             <p className='md:text-[20px] text-[16px] text-[#686868] font-medium text-center halvetica'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
        </div>
        <Services/>
         

         
    </div>

       <div className="container  pt-0 md:py-[70px]">
          <h3 className='text-center text-[24px] md:text-[40px] font-bold text-black mb-2.5'>Our Expert Team  </h3>
          <p className='md:text-[17px] text-[16px] max-w-[574px] mx-auto text-[#686868] mb-[50px] font-medium text-center'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
          <Partners/>
                 
               <h2 className='text-center text-[24px] md:text-[40px] font-bold text-black mb-0 md:mb-[50px] mt-12 md:mt-[70px]'>Our Partners and Clients</h2>
                
            <div>

                   <Jobs/>


                <div className="max-w-[1200px] mx-auto py-2">
                            <Swiper
                              modules={[Autoplay]}
                              slidesPerView={5}
                              spaceBetween={20}
                              loop={true}
                              autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: true,
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

                <h2 className='text-center text-[24px] md:text-[40px] font-bold text-black mb-4 mt-[70px]'>Our Media</h2>
                <p className='md:text-[17px] text-[16px] max-w-[574px] mx-auto text-[#686868] mb-[50px] font-medium text-center'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>

                <div className='w-full flex items-center justify-between mb-10'>
                   <p className='md:text-[35px] text-[20px] font-medium'>Our media showcase</p>
                   <div className='flex gap-x-3 md:gap-x-6'>
                      <p onClick={() => scroll("left")}  className='md:w-[50px]  w-10 md:h-[50px] h-10 rounded-full flex items-center hover:bg-[#009688] text-black hover:text-white justify-center bg-[#ECF3F6] cursor-pointer transition-all'><FaArrowLeftLong /></p>
                      <p  onClick={() => scroll("right")}  className='md:w-[50px] w-10 md:h-[50px] h-10 rounded-full flex hover:bg-[#009688] text-black hover:text-white  items-center justify-center bg-[#ECF3F6] cursor-pointer transition-all'><FaArrowRightLong /></p>
                   </div>
                </div>



            </div>

            <div ref={containerRef} className="flex no-scrollbar container gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            >
                  {videos.map((item, index) => (
                    <div
                    style={{ backgroundImage: `url(${item.img})` }}
                      key={index}
                      className={`md:w-[380px] no-scrollbar w-[320px] mx-auto h-[400px] md:h-[510px] relative group bg-[url(${item.img})] bg-center bg-cover rounded-lg overflow-hidden shadow-lg flex-shrink-0`}
                    >
                      <div className="p-4 absolute w-[90%]  flex items-center justify-between gap-x-4 bottom-0">
                        <p className="font-bold w-[70%] text-[20px] text-white">{item.title}</p>
                        <button className="mt-3 w-[58px] h-[58px] group-hover:bg-[#2198FF] transition rounded-full bg-white text-white flex items-center justify-center">
                          <img src="./video/circle.png" alt="" />
                        </button>
                      </div>
                    </div>
                  ))}
          </div>
       </div>

       <div className="container pb-[70px] my-[70px]">
          <h3 className='text-center text-[24px] md:text-[40px] font-bold halvetica text-black mb-2.5'>What students say </h3>
          <p className='md:text-[20px] max-w-[574px] mx-auto text-[16px] text-[#686868] font-medium text-center halvetica'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
       </div>
           {/* <h1 className='text-3xl text-center mb-[70px]'>IMGCARUSELx</h1>
            */}
            <TestimonialCarousel/>
       {/* <ImageCarousel/> */}
       <div className="container pb-[70px] my-[70px]">
          <h3 className='text-center text-[24px] md:text-[40px] font-bold halvetica text-black mb-2.5'>Frequently asked questions</h3>
          <p className='md:text-[20px] max-w-[574px] mx-auto text-[16px] text-[#686868] font-medium text-center halvetica'>If you have any further questions, please contact us </p>
       </div>
       <Questions/>
       <Consultation className='mt-[700px]'/>
   </>
  )
}

export default Home
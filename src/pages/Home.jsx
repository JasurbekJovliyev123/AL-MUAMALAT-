import React from 'react'
import { cards } from '../constans'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { people } from '../constans'
import { logos } from '../constans';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
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

         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 mb-[70px]'>
              { cards.map((card)=>{
                return <div key={card.title} style={{backgroundColor:card.color}} className='max-w-[380px] h-[280px] md:h-[361px] relative p-5 md:p-[30px] rounded-[10px]'>
                    <div className='flex items-center gap-5 mb-5'>
                        <img className='md:w-[85px] w-14 h-14 md:h-[85px]' src={card.imgurl} alt="img" />
                        <h4 className='md:text-[24px] text-[18px] font-bold open-sans'>{card.title}</h4>
                        
                    </div>
                    <p className='md:text-[17px] text-[14px] font-normal open-sans mb-9'>{card.subtitle}</p>
                    <button className='md:w-[90%] w-[88%] absolute py-2 md:py-[10px] bottom-5  bg-[#152032] text-white rounded-[10px] open-sans font-semibold cursor-pointer'>Learn more</button>
                </div>
              })}
         </div>

         
    </div>

       <div className="container pt-0 md:pt-[70px]">
          <h3 className='text-center text-[24px] md:text-[40px] font-bold text-black mb-2.5'>Our Expert Team  </h3>
          <p className='md:text-[17px] text-[16px] max-w-[574px] mx-auto text-[#686868] mb-[50px] font-medium text-center'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>

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
                  <div className='rounded-[10px] bg-[#D2E6E4] block md:flex items-center p-5 md:p-[35px] pr-[81px]'>
                    <img src={person.img} alt="person" className="md:mr-8 md:h-auto h-[180px] mx-auto" />
                    <div>
                      <p className='font-bold text-center text-lg md:text-[28px] mb-9'>{person.name}</p>
                      <p className='md:text-[22px] text-center text-md md:leading-[30px] text-[#141B34] mb-9'>{person.desc}</p>
                      <div className='flex items-center gap-x-8'>
                        {person.links.map((link, idx) => (
                          <img src={link} alt="social" key={idx} className='cursor-pointer' />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
               <h2 className='text-center text-[40px] font-bold text-black mb-[50px] mt-[70px]'>Our Partners and Clients</h2>

            <div>

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
                                <div className="bg-[#F6F8F9] w-[280px] h-[139px] flex-wrap gap-x-6 shadow-md rounded-[10px] flex items-center justify-center p-4">
                                  <img src={logo} alt="logo" className="max-h-[50px] object-contain" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
              </div>


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
                                  <div className="bg-[#F6F8F9] w-[280px] h-[139px] flex-wrap gap-x-6 shadow-md rounded-[10px] flex items-center justify-center p-4">
                                    <img src={logo} alt="logo" className="max-h-[50px] object-contain" />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                </div>

                <h2 className='text-center text-[40px] font-bold text-black mb-4 mt-[70px]'>Our Media</h2>
                <p className='text-[17px] max-w-[574px] mx-auto text-[#686868] mb-[50px] font-medium text-center'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>

                <div className='w-full flex items-center justify-between mb-10'>
                   <p className='text-[35px] font-medium'>Our media showcase</p>
                   <div className='flex gap-x-6'>
                      <p className='w-[50px] h-[50px] rounded-full flex items-center hover:bg-[#009688] text-black hover:text-white justify-center bg-[#ECF3F6] cursor-pointer transition-all'><FaArrowLeftLong /></p>
                      <p className='w-[50px] h-[50px] rounded-full flex hover:bg-[#009688] text-black hover:text-white  items-center justify-center bg-[#ECF3F6] cursor-pointer transition-all'><FaArrowRightLong /></p>
                   </div>
                </div>



            </div>













       </div>
   </>
  )
}

export default Home
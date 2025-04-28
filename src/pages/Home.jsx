import React from 'react'
import { cards } from '../constans'
import { links } from '../constans'
const Home = () => {
  return (
   <>
     <div className='w-full h-[86vh] pt-10 relative bg-[#009688]'>
          <div className='max-w-[223px] absolute left-[53%] top-[5%] px-5 py-4 flex items-center gap-2 bg-white rounded-[20px]'>
                         <img className='w-10 h-10' src="./calendar.png" alt="" />
                         <p>
                            <p  className='text-[#595959] nunito-sans text-[24px] font-bold'>250k</p> 
                            <span className='text-[#545567] font-semibold inter -mt-2'>Assisted Student</span>
                         </p>
            </div>
         <div className='container flex items-center'>
          <div>
              <div className='bg-white max-w-[421px] text-[#252641] py-[10px] mb-10 px-[25px] text-[17px] rounded-[10px]'>
                Seeking Knowledge is an Obligation in Islam
              </div>
              <p className='max-w-[723px] leading-[70px] font-bold text-[58px] text-white'>Enhance Your Understanding of Islamic Ethics with Al-Muamalat</p>
          </div>    
            <img src="./person.png" alt="" />
         </div>
    </div>

    <div className='container pt-[100px]'>
        <div className='max-w-[574px] mx-auto mb-[62px]'>
             <h3 className='text-center text-[40px] font-bold text-black mb-2.5'>Our services </h3>
             <p className='text-[20px] text-[#686868] font-medium text-center'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
        </div>

         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 mb-[70px]'>
              { cards.map((card)=>{
                return <div key={card.title} style={{backgroundColor:card.color}} className='max-w-[380px] h-[361px] relative p-[30px] rounded-[10px]'>
                    <div className='flex items-center gap-5 mb-5'>
                        <img className='w-[85px] h-[85px]' src={card.imgurl} alt="img" />
                        <h4 className='text-[24px] font-bold'>{card.title}</h4>
                        
                    </div>
                    <p className='text-[17px] font-normal open-sans mb-9'>{card.subtitle}</p>
                    <button className='w-[90%]  absolute py-[10px] bottom-5  bg-[#152032] text-white rounded-[10px] open-sans font-semibold cursor-pointer'>Learn more</button>
                </div>
              })}
         </div>

         
    </div>

       <div className="container pt-[70px]">
          <h3 className='text-center text-[40px] font-bold text-black mb-2.5'>Our Expert Team  </h3>
          <p className='text-[17px] max-w-[574px] mx-auto text-[#686868] mb-[22px] font-medium text-center'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>

          <div className='max-w-[980px] mt-[22px] rounded-[10px] mb-6 bg-[#D2E6E4] flex items-center mx-auto p-[35px] pr-[81px]'>
                <img src="./person1.png" alt="person" />
                <div>
                   <p className='font-bold text-[28px] mb-9'>Dr. Mezbah Uddin Ahmed</p>
                    <p className='text-[22px] leading-[30px] text-[#141B34] mb-9'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>

                    <div className='flex items-center gap-x-8'>
                        {links.map((item,index)=>{
                          return <img className='cursor-pointer' src={item} key={index}/>
                        })}
                    </div>
                </div>
          </div>
       </div>
   </>
  )
}

export default Home
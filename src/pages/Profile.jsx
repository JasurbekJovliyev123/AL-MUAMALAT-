import React from 'react'

const Profile = () => {
  return (
    <div className='pt-[100px] container'>
        <div className='flex items-center gap-x-6 mb-7'>
              <button className='md:w-[157px] w-[80px] h-7 md:h-[38px] rounded-[8px] bg-[#009688] text-white text-sm md:text-[15px] flex items-center justify-center open-sans font-semibold cursor-pointer'>Profile</button>
              <button className='md:w-[157px] w-[80px] h-7 md:h-[38px] rounded-[8px] border text-[#686868] text-sm md:text-[15px] flex items-center justify-center open-sans font-semibold cursor-pointer'>Courses</button>
        </div>
        <div className='container rounded-[10px] px-8 py-[60px] shadow-lg'>
           <div className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-x-6'>
                <img src="./footer/user.png" alt="" />
                <p className='text-[32px] font-semibold'>Alexa Rawles</p>
              </div>
               <button className='md:w-[100px] w-[80px] h-7 md:h-[38px] rounded-[8px] bg-[#009688] text-white text-sm md:text-[15px] flex items-center justify-center open-sans font-semibold cursor-pointer'>Save</button>
           </div>

           <form className='pt-10 flex-1'>
             <div className='flex items-center w-full gap-x-10'>
                   <label className='w-full'>
                    <p className='text-sm mb-2 md:mb-3'>First Name</p>
                    <input className='w-full px-4 bg-[#F7F7F7] py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-4 md:mb-7' type="text" placeholder='Your First Name' />
                  </label>
                <label className='w-full'>
                  <p className='text-sm mb-2 md:mb-3'>First Name</p>
                  <input className='w-full bg-[#F7F7F7] px-4 py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-7' type="text" placeholder='Your First Name' />
                </label>
             </div>
               <div className='flex items-center w-full gap-x-10'>
                   <label className='w-full'>
                    <p className='text-sm mb-2 md:mb-3'>Address</p>
                    <input className='w-full px-4 bg-[#F7F7F7] py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-4 md:mb-7' type="email" placeholder='Address' />
                  </label>
                <label className='w-full'>
                  <p className='text-sm mb-2 md:mb-3'>Birthday</p>
                  <input className='w-full bg-[#F7F7F7] px-4 py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-7' type="date" placeholder='Enter Your Birthday' />
                </label>
             </div>
           </form>
        </div>
    </div>
  )
}

export default Profile

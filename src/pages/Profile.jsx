import React, { useState } from 'react'
import { request } from '../services/Request'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
const Profile = () => {
  const [image,setImage]=useState(null)
  const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      request.get('https://api.al-muamalat.uz/api/users/me')

  })
  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation({
      mutationFn: (submitData) => {
          return request.put(`https://api.al-muamalat.uz/api/users/${data?.data?.data?.user_id}`, submitData)
              .then((response) => {
                console.log(response?.data);
                refetch()
              });
      },
  });

  const onSubmit = (data) => {
    const submitData={
      images:image,
      ...data
    }

      mutate(submitData);
  };

  console.log(data);
  return (
    <div className='md:pt-[100px] pt-8 container'>
        <div className='flex items-center gap-x-6 md:mb-7'>
              <button className='md:w-[157px] w-[80px] h-7 md:h-[38px] rounded-[8px] bg-[#009688] text-white text-sm md:text-[15px] flex items-center justify-center open-sans font-semibold cursor-pointer'>Profile</button>
              <button className='md:w-[157px] w-[80px] h-7 md:h-[38px] rounded-[8px] border text-[#686868] text-sm md:text-[15px] flex items-center justify-center open-sans font-semibold cursor-pointer'>Courses</button>
        </div>
        <div className='container rounded-[10px] px-8 py-[60px] shadow-lg'>
           <div className='w-full flex items-center profileBgcolor py-4 px-6 rounded-2xl justify-between'>
              <div className='flex items-center  gap-x-6'>
             
                <img src={`https://api.al-muamalat.uz/api/uploads/images/${data?.data?.data?.image_src}`} alt="" />
                <div>
                <p className='text-[24px] text-white font-semibold'>{data?.data?.data?.full_name}</p>
                <p className='text-[16px] text-white font-semibold'>+{data?.data?.data?.phone_number}</p>
                </div>
              </div>
               
           </div>

           <form onSubmit={handleSubmit(onSubmit)} className='pt-10 flex-1'>
             <div className='md:flex block items-center w-full gap-x-10'>
                   <label className='w-full'>
                    <p className='text-sm mb-2 md:mb-3'>Full Name</p>
                    <input {...register('full_name')} className='w-full px-4 bg-[#F7F7F7] py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-4 md:mb-7' type="text" placeholder='Full Name' />
                  </label>
                <label className='w-full'>
                  <p className='text-sm mb-2 md:mb-3'>Phone Number</p>
                  <input {...register('phone_number')}  className='w-full bg-[#F7F7F7] px-4 py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-7' type="text" placeholder='PhoneNumber' />
                </label>
             </div>
               <div className='md:flex block items-center w-full gap-x-10'>
                   <label className='w-full'>
                    <p className='text-sm mb-2 md:mb-3'>Address</p>
                    <input {...register('address')}  className='w-full px-4 bg-[#F7F7F7] py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-4 md:mb-7' type="email" placeholder='Address' />
                  </label>
                <label className='w-full'>
                  <p className='text-sm mb-2 md:mb-3'>Avatar</p>
                  <input  accept='image/*' onChange={(e)=>setImage(e.target.files[0])}  className='w-full bg-[#F7F7F7] px-4 py-1.5 md:py-2.5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 mb-7' type="file" placeholder='avatar' />
                </label>
             </div>
             <button type='submit' className='md:w-[100px] w-[80px] h-7 md:h-[38px] rounded-[8px] bg-[#009688] text-white text-sm md:text-[15px] flex items-center justify-center open-sans font-semibold cursor-pointer'>Save</button>
           </form>
        </div>
    </div>
  )
}

export default Profile

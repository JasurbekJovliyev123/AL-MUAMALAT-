import React, { useState } from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from '../context'
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const SignIn = () => {
  const navigate = useNavigate();
   const { register,login, handleSubmit } = useForm()
      const auth=useAuth()
  const onSubmit = async (data) => {
              const { password, phone_number } = data;
                try {
                  const res = await auth.login({ password, phone_number });
                  toast.success(`${res.user.full_name} siz muvaffaqiyatli akkauntingizga kiridngiz`);
                  navigate('/');
                } catch (err) {
                  alert(err);
                }
              };
  return (
    <div className='max-w-[1300px] mx-auto lg:h-[100vh] h-[1024px] bg-white p-5 flex gap-x-3'>
          <div className='md:w-[50%] w-full pt-16 md:pt-20'>
               <div className='flex justify-between w-full items-center mb-10 md:mb-[105px] lg:mb-[25px]'>
                  <NavLink to={'/'}>
                    <img src="/Logo.svg" alt="" />
                  </NavLink>
                  <div  className='flex items-center gap-x-2 md:gap-x-5'>
                      <div>
                        <p className='text-[#8F8F8F] text-sm md:text-[20px] inter'>Questions?</p>
                        <p className='md:text-[30px] text-xl text-[#009688] font-bold inter'>Ask Diyor</p>
                      </div>
                        <div className='md:-mr-16 mr-0 z-50 p-2.5 bg-white rounded-full'> 
                            <img className='md:w-auto w-16'  src="./userimg.png" alt="" />
                        </div>
                   </div>
                   
               </div>

               <h2 className='mb-10 text-4xl lg:text-[60px]  font-bold'>Get started</h2>
               <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
               
                  <input
                  className='md:w-[454px] w-[320px] md:px-4 py-3 px-3  lg:py-[14px] rounded-[8px] border-2 border-[#8F8F8F] focus:border-[#4D90FE] focus:ring-2 focus:ring-[#4D90FE]'
                  type="password"
                  {...register('password')}
                  name='password'
                  placeholder='password'
                />
                  <PhoneInput
                    country={'uz'}
                    {...register("phone_number")}  
                    enableSearch
                    inputClass="!pl-[100px] py-2 border-none text-base !w-full"
                    buttonClass="!left-3 !right-auto border-none absolute z-10"
                    containerClass="react-tel-input w-full border-2 border-gray-400 rounded-md"
                  />

                <button type='submit' className='md:w-[454px] w-[320px] cursor-pointer rounded-[8px] lg:py-[14px] py-[8px] text-center inter text-white font-semibold text-[20px] bg-[#009688]'>Sign in</button>
               </form>
               <Link to={'/signin'}>
                  <p className='text-[#8F8F8F] flex inter text-lg md:text-[26px] ml-12 cursor-pointer mt-4'>Create a new account ! <span className='text-xl font-semibold text-[#009688]'>Sign up</span> </p>
                </Link>
          </div>
          <div className='w-[700px] hidden md:block bg-[#009688] lg:h-[700px] h-full rounded-[40px] lg:pt-20 pt-[132px] text-center'>
                <img className='mx-auto lg:h-[405px] h-[545px] mb-[63px]' src="./loginimg.png" alt="" />
                <h3 className='text-white text-center lg:text-[30px] text-[36px] lg:max-w-[550px] max-w-[607px] mx-auto font-bold lg:leading-8 leading-[50px]'>Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance</h3>
          </div>
    </div>
  )
}

export default SignIn
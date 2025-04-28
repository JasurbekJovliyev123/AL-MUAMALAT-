import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignIn = () => {
  const [userData,setUserData]=useState({email:'',parol:''})
  const onChangeData=(e)=>{
    setUserData((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const onsubmit=(e)=>{
    e.preventDefault()
    console.log(userData);
  }
  return (
    <div className='max-w-[1300px] mx-auto h-[100vh] bg-white p-5 flex gap-x-3'>
          <div className='w-[50%] pt-20'>
               <div className='flex justify-between w-full items-center mb-[105px] lg:mb-[25px]'>
                  <NavLink to={'/'}>
                    <img src="/Logo.svg" alt="" />
                  </NavLink>
                   <div  className='flex items-center gap-x-5'>
                      <div>
                        <p className='text-[#8F8F8F] text-[20px] inter'>Questions?</p>
                        <p className='text-[30px] text-[#009688] font-bold inter'>Ask Diyor</p>
                      </div>
                        <div className='-mr-16 z-50 p-2.5 bg-white rounded-full'> 
                            <img  src="./userimg.png" alt="" />
                        </div>
                   </div>
                   
               </div>

               <h2 className='mb-10 lg:text-[60px] text-[86px] font-bold'>Get started</h2>
               <form onSubmit={onsubmit} className='flex flex-col gap-y-6'>
               <div className='relative w-[454px] flex items-center'>
                    <input
                        className='w-[454px] px-4 lg:py-[14px] py-[18px] rounded-[8px] border-2 border-[#8F8F8F] focus:border-[#4D90FE] focus:ring-2 focus:ring-[#4D90FE]'
                        type="email"
                        name='email'
                        onChange={onChangeData}
                        value={userData.email}
                        placeholder='Enter your email'
                          />
                          <img className='absolute right-3' src="./email.png" alt="" />
                  </div>
                  <input
                  className='w-[454px] px-4 lg:py-[14px] py-[18px] rounded-[8px] border-2 border-[#8F8F8F] focus:border-[#4D90FE] focus:ring-2 focus:ring-[#4D90FE]'
                  type="password"
                    onChange={onChangeData}
                  value={userData.parol}
                  name='parol'
                  placeholder='password'
                />
                <button type='submit' className='w-[454px] cursor-pointer rounded-[8px] lg:py-[14px] py-[18px] text-center inter text-white font-semibold text-[20px] bg-[#009688]'>Sign in</button>
               </form>
               <Link to={'/login'}>
                  <p className='text-[#8F8F8F] inter text-[26px] ml-16 cursor-pointer mt-4'>Create a new account !</p>
                </Link>
          </div>
          <div className='w-[700px] bg-[#009688] lg:h-[700px] h-full rounded-[40px] lg:pt-20 pt-[132px] text-center'>
                <img className='mx-auto lg:h-[405px] h-[545px] mb-[63px]' src="./loginimg.png" alt="" />
                <h3 className='text-white text-center lg:text-[30px] text-[36px] lg:max-w-[550px] max-w-[607px] mx-auto font-bold lg:leading-8 leading-[50px]'>Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance</h3>
          </div>
    </div>
  )
}

export default SignIn
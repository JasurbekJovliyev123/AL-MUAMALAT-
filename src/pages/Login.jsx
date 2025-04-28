import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Login = () => {
  const [userLoginData, setuserLoginData] = useState({name:'',parol:'',phoneNumber:''});
  const [phone, setPhone] = useState('');
  const onChangeData=(e)=>{
    setuserLoginData((prev)=>{
      return {...prev,[e.target.name]:e.target.value,phoneNumber:phone}
    })
  }

  const onsubmitData=(e)=>{
    e.preventDefault()
    console.log(userLoginData);
  }
   
  return (
    <div className='max-w-[1300px] mx-auto lg:h-[100vh] h-[1024px] bg-white p-5 flex '>
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

               <h2 className='lg:text-[60px] text-[86px] font-bold'>Get started</h2>
               <p className='mb-10 inter lg:text-[22px] text-[26px] '>Already have an account?  
                  <span className='text-[#009688] ml-1 inter font-bold lg:text-[22px] text-[26px]'><Link to={'/sign'}>Sign in</Link></span>
               </p>
               <form onSubmit={onsubmitData} className='flex flex-col gap-y-6'>
                  <div className='relative w-[454px] flex items-center'>
                    <input
                        className='w-[454px] px-4 lg:py-[14px] py-[18px] rounded-[8px] border-2 border-[#8F8F8F] focus:border-[#4D90FE] focus:ring-2 focus:ring-[#4D90FE]'
                        type="text"
                        name='name'
                        onChange={onChangeData}
                        placeholder='Enter your name'
                          />
                          <img className='absolute right-3' src="./user.png" alt="" />
                  </div>
                      <input
                        className='w-[454px] px-4 lg:py-[14px] py-[18px] rounded-[8px] border-2 border-[#8F8F8F] focus:border-[#4D90FE] focus:ring-2 focus:ring-[#4D90FE]'
                        type="password"
                        onChange={onChangeData}
                        name='password'
                        placeholder='password'
                      />
                           <div className="relative w-[454px]">
                                <PhoneInput
                                  country={'uz'}
                                  value={phone}
                                  onChange={setPhone}
                                  className='w-[454px] px-4 lg:py-[10px] py-[18px] rounded-[8px] border-2 border-[#8F8F8F] focus:border-[#4D90FE] focus:ring-2 focus:ring-[#4D90FE]'
                                  enableSearch
                                  // inputClass="!pl-[100px] py-2 text-base !w-full"
                                  // buttonClass="!left-3 !right-auto absolute z-10"
                                  // containerClass="react-tel-input w-full"
                                />

                    
                        </div>
                <button type='submit' className='w-[454px] cursor-pointer rounded-[8px] lg:py-[14px] py-[18px] text-center inter text-white font-semibold text-[20px] bg-[#009688]'>Login</button>
               </form>
              
          </div>
          <div className='w-[700px] bg-[#009688] lg:h-[700px] h-full rounded-[40px] lg:pt-20 pt-[132px] text-center'>
                <img className='mx-auto lg:h-[405px] h-[545px] mb-[63px]' src="./loginimg.png" alt="" />
                <h3 className='text-white text-center lg:text-[30px] text-[36px] lg:max-w-[550px] max-w-[607px] mx-auto font-bold lg:leading-8 leading-[50px]'>Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance</h3>
          </div>
    </div>
  )
}

export default Login
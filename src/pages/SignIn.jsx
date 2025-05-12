import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const auth = useAuth();

  const [phoneNumber, setPhoneNumber] = useState(''); // YANGI

  const onSubmit = async (data) => {
    const { password } = data;

    try {
      const res = await auth.login({
        password,
        phone_number: phoneNumber, // state orqali yuboramiz
      });

      toast.success(`${res.user.full_name} siz muvaffaqiyatli akkauntingizga kirdingiz`);
      navigate('/');
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className='max-w-[1300px] mx-auto lg:h-[100vh] h-[1024px] bg-white p-5 flex gap-x-3'>
      <div className='md:w-[50%] w-full pt-16 md:pt-20'>
        {/* ... HEADER ... */}
        <h2 className='mb-10 text-4xl lg:text-[60px] font-bold'>Get started</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
          <input
            className='md:w-[454px] w-[320px] md:px-4 py-3 px-3 lg:py-[14px] rounded-[8px] border-2 border-[#8F8F8F] focus:border-[#4D90FE] focus:ring-2 focus:ring-[#4D90FE]'
            type="password"
            {...register('password')}
            name='password'
            placeholder='password'
          />

          <PhoneInput
            country={'uz'}
            value={phoneNumber}
            onChange={setPhoneNumber} // MUHIM
            enableSearch
            inputClass="!pl-[70px] max-w-[400px] py-2 border-none text-base !w-full"
            buttonClass="!left-3 !right-auto border-none absolute z-10"
            containerClass="react-tel-input w-full border-2 border-gray-400 rounded-md"
          />

          <button
            type='submit'
            className='md:w-[454px] w-[320px] cursor-pointer rounded-[8px] lg:py-[14px] py-[8px] text-center inter text-white font-semibold text-[20px] bg-[#009688]'
          >
            Sign in
          </button>
        </form>

        <Link to={'/signup'}>
          <p className='text-[#8F8F8F] flex items-center gap-x-2 inter text-lg md:text-[26px] ml-12 cursor-pointer mt-4'>
            Create a new account ! <span className='text-xl font-semibold text-[#009688]'>Sign up</span>
          </p>
        </Link>
      </div>

      <div className='w-[700px] hidden md:block bg-[#009688] lg:h-[700px] h-full rounded-[40px] lg:pt-20 pt-[132px] text-center'>
        <img className='mx-auto lg:h-[405px] h-[545px] mb-[63px]' src="./loginimg.png" alt="" />
        <h3 className='text-white text-center lg:text-[30px] text-[36px] lg:max-w-[550px] max-w-[607px] mx-auto font-bold lg:leading-8 leading-[50px]'>
          Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
        </h3>
      </div>
    </div>
  );
};

export default SignIn;

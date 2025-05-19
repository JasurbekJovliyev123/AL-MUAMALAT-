import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context';
const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const auth=useAuth()
          const onSubmit = async (data) => {
             data.phone_number = phone;
             const { full_name, password, phone_number } = data;

              try {
                const res = await auth.register({ full_name, password, phone_number });
                if(full_name && password && phone_number){
                    toast.success(`${res.user.full_name} siz muvaffaqiyatli ro'yxatdan o'tdingiz`);
                    navigate('/profile');
                }else{
                  toast.error('Barcha malumotlar bor ekanligini tekshiring')
                }
                
              } catch (err) {
                 toast.error("Ro'yxatdan o'tishda xatolik yuz berdi!");
              }
            };

  const [phone, setPhone] = useState('');
  return (
    <div className="max-w-[1300px] mx-auto lg:h-screen bg-white p-5 flex flex-col lg:flex-row">
      
      <div className="lg:w-1/2 w-full pt-10">
        <div className="flex justify-between items-center mb-10">
          <NavLink to="/">
            <img className="w-[150px]" src="/Logo.svg" alt="Logo" />
          </NavLink>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm text-gray-500">Questions?</p>
              <p className="text-xl text-[#009688] font-bold">Ask Diyor</p>
            </div>
            <div className="p-2 bg-white rounded-full">
              <img className="w-12" src="./userimg.png" alt="User" />
            </div>
          </div>
        </div>

        <h2 className="text-4xl lg:text-[60px] font-bold mb-3">Welcome Back</h2>
        <p className="mb-10 text-lg lg:text-[22px]">
          Don't have an account yet?{' '}
          <span className="text-[#009688] font-bold">
            <Link to="/sign">Sign in</Link>
          </span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-[90%] md:w-[454px]">
         
          <input
            {...register("full_name")}
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter your name"
          />
         
         
          <input
             {...register("password")}
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Enter your password"
          />
        
          
         
          <PhoneInput
            country={'uz'}
             {...register("phone_number")}
            value={phone}
            onChange={(value) => setPhone(value)}
            enableSearch
            inputClass="!pl-[100px] py-6 border-none text-base !w-full"
            buttonClass="!left-3 !right-auto border-none absolute z-10"
            containerClass="react-tel-input w-full border-2 border-gray-400 rounded-md"
          />

        
          <button
            type="submit"
            className="bg-[#009688] text-white font-semibold text-lg py-3 rounded-md"
          >
            Sign up
          </button>
         
        </form>
      </div>

   
      <div className="w-[700px] hidden lg:block bg-[#009688] h-[700px] rounded-[40px] pt-20 text-center">
        <img className="mx-auto h-[405px] mb-10" src="./loginimg.png" alt="" />
        <h3 className="text-white text-[30px] font-bold max-w-[550px] mx-auto leading-8">
          Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
        </h3>
      </div>
    </div>
  );
};

export default Login;





//   mutationFn: (loginData) =>
//     axios
//       .post('https://api.al-muamalat.uz/api/auth/signup', loginData)
//       .then((res) => {
//         console.log(res?.data);
//         localStorage.setItem('testUserToken', res?.data?.data?.tokens?.accessToken);
//       })
//       .catch((err) => {
//         console.error(err);
//         throw new Error('Authentication failed. Check your login credentials.');
//       }),
// });

  // const onSubmit = async (data) => {
//    const loginPayload = {
//     username: data.name,
//     password: data.password,
//     phoneNumber: phone,
//   };
//   console.log(loginPayload);
  
//   try {
//     await mutate(loginPayload);
//   } catch (error) {
//     console.error(error);
//     alert("Login failed. Please check your credentials or try again later.");
//   }
// };
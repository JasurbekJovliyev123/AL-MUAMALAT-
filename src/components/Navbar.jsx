import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { language } from '../constans';
import { programs } from '../constans';
import { FaUserGraduate } from "react-icons/fa";
const Navbar = () => {
  const userToken=localStorage.getItem('testUserToken')
  console.log(userToken);
  
  const selectLanguagefunc = () => {
    try {
      const storedLang = localStorage.getItem('lang');
      return storedLang ? JSON.parse(storedLang) : language[0];
    } catch (e) {
      console.error('Xatolik:', e);
      return language[0];
    }
  };
    const [languages,setLanguages]=useState(selectLanguagefunc())
    const [openModal,setOpenModal]=useState(false)
    const [selectLanguages,setSelectLanguages]=useState(false)
    const [selectText,setSelectText]=useState(false)
    const onModal=()=>{
        setOpenModal(!openModal)
    }
    const onSelectLanguage=(lang)=>{
      setLanguages(lang)
      setSelectLanguages(!selectLanguages)
      localStorage.setItem('lang',JSON.stringify(lang))
     
      
    }

    const onSelect=(id)=>{
        programs.map((item)=>{
            if(item.id===id){
                setSelectText(true)
            }
        })
        setOpenModal(!openModal)
    }
  return (
    <div>
        <div className='container py-5 flex justify-between items-center'>
              <NavLink to={'/'}>
                <img className='w-[150px] md:w-[200px] lg:w-[250px]' src="/Logo.svg" alt="" />
              </NavLink>
              <ul className='md:flex hidden items-center gap-5'>
                <li>
                     <NavLink className='open-sans font-semibold text-[#686868]'  to={'/'}>Home</NavLink>
                </li>
                <li>
                     <NavLink className='open-sans  font-semibold flex gap-x-1 items-center text-[#686868]' to={'/programs'}>
                       <span>Programs</span>
                     {!openModal && <IoIosArrowDown onClick={()=>onModal()} className='text-xl'/>}
                     {openModal && <IoIosArrowUp onClick={()=>onModal()} className='text-xl'/>}
                     {openModal && (
                <div
                    className={`absolute top-20 transition-all duration-300 ease-in-out origin-top  p-4 border-2 rounded-[5px] shadow-2xl max-w-[297px] border-gray-500 bg-white opacity-100 scale-100 visible`}
                >
            {programs.map((item) => (
            <p
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`text-[15px] ${
                selectText ? 'text-[#009688]' : 'text-[#686868]'
                } hover:text-[#009688] border-b mb-2 border-b-neutral-600 pb-1 cursor-pointer`}
            >
                {item.title}
            </p>
            ))}
        </div>
)}
                     </NavLink>
                </li>
                <li>
                     <NavLink className='open-sans font-semibold text-[#686868]' to={'/finance'}>Finance tools</NavLink>
                </li>
                <li>
                     <NavLink className='open-sans font-semibold text-[#686868]' to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
                 
              <div className='flex items-center gap-2 md:gap-8'>
                <div className='flex items-center gap-1'>
                        <img className='w-5 md:w-6 h-4' src={languages.imgUrl} alt="img" />
                        <p className='text-sm md:text-xl uppercase'>{languages.title}</p>
                        {!selectLanguages && <IoIosArrowDown onClick={()=>setSelectLanguages(!selectLanguages)} className='md:text-xl text-md cursor-pointer'/>}
                        {selectLanguages && <IoIosArrowUp onClick={()=>setSelectLanguages(!selectLanguages)} className='md:text-xln text-md cursor-pointer'/>}
                </div>
                <div className='h-6 hidden md:block bg-[#76767699] w-[2px]'> </div>
                    {selectLanguages && <div className='absolute z-50 bg-gray-400 top-[72px] p-2 border border-gray-300 rounded-[5px]'>
                         {
                            language.map((item)=>{
                                return <div onClick={()=>onSelectLanguage(item)} className='flex items-center gap-1 mb-1 cursor-pointer'>
                                     <img className='w-6 h-4' src={item.imgUrl} alt="" />
                                     <p className='text-[15px] open-sans font-semibold uppercase'>{item.title}</p>
                                </div>
                            })
                         }
                    </div>}
                 {userToken ? <Link to={'/profile'}><p>profil</p></Link>:<Link to={'/sign'}><button className='md:w-[110px] w-[80px] h-7 md:h-[38px] rounded-[8px] bg-[#009688] text-white text-sm md:text-[15px] flex items-center justify-center open-sans font-semibold cursor-pointer'>Sign in</button>  </Link>}
                 
                 
              </div>
        </div>
    </div>
  )
}

export default Navbar


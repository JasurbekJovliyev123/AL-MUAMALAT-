import React from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const Consultation = () => {
  return (
    <div className='container md:flex block h-auto md:h-[495px] pt-10 my-[70px] mt-24'>
        <div className='max-w-[709px] bg-[#FAE9D3] p-6 md:p-[46px]'>
            <h3 className='font-bold text-xl md:text-[32px] text-center mb-3 md:mb-5 text-[#D28527]'>Workshops and Spiritual Development</h3>
            <p className='font-semibold text-[16px] md:text-[22px]  mb-5 text-[#D28527]'>Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life</p>
        </div>
        <div className='max-w-[470px] bg-[#F9F7F3] h-full p-6 md:p-[46px]'>
                <h4 className='text-#152032] font-bold mb-1.5 text-xl md:text-[30px]'>Free consultation</h4>
                <p className='md:text-[16px] text-sm mb-7 font-normal'>Leave your phone number, and we will reach out to provide you with complete information about our courses. </p>

                <form className="flex flex-col gap-6 w-[90%] md:w-[374px]">
         
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Enter your name"
                    />
        
        
          
         
                        <PhoneInput
                            country={'uz'}
                            enableSearch
                            inputClass="!pl-[100px] py-5 border-none text-base !w-full"
                            buttonClass="!left-3 !right-auto border-none absolute z-10"
                            containerClass="react-tel-input w-full border-2 border-gray-400 rounded-md"
                        />

                        <div className='flex gap-x-2 items-center'>
                            <input  type="checkbox" name="" id="" />
                            <p className='text-sm text-[#152032] leading-4 w-full'>I agree to the use of my personal information for consultation purposes.</p>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#009688] text-white font-semibold text-lg py-1.5 md:py-3 rounded-md"
                        >
                            Submit
                        </button>
         
        </form>
        </div>
    </div>
  )
}

export default Consultation
import React from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const EhomePage = () => {
  return (
    <div className='sm:w-full sm:h-screen   -top-5 lg:top-0   relative sm:top-24 '>
        <div className=' sm:w-[80%]   sm:flex sm:h-screen  mx-auto '>
       <div className=' justify-cente'>
        <img src="signup.png" alt="" 
        className='sm:h-[50%] h-[40vh]  w-full  lg:h-[90%] sm:w-full relative top-5  '
        />
       </div>

       <div className=' justify-center mx-auto      relative lg:w-[50%] lg:h-[80%] sm:-left-11 lg:-left-0  sm:top-5 '>
         <div className=' sm:h-[75%]  mx-auto w-[60%]  top-7  sm:top-5 lg:top-44 relative '>
            <div className='space-y-5'>
            <h1  className='font-semibold sm:text-xl  lg:text-4xl  text-4xl'>Sign up</h1>
          <p className='text-sm text-gray-500'> Already have an account?  <span className='text-green-500 '>Login</span></p>
          </div>


          {/* For the placeholders  */}
      <div className='space-y-8  sm:h-[40%]  sm:w-[40vh] lg:w-[70%]  lg:h-[55%] relative top-5'>
        <div className=''>
        <input type="text"  placeholder='Your Name' className='sm:text-sm  lg:text-xl' />
        <hr />

        </div>

        <div>
        <input type="text" placeholder='Username' className='sm:text-sm  lg:text-xl' />
            <hr />
        </div>

        <div>
            <input type="text" placeholder='Email address'  />
            <hr />
        </div>

        <div>
            <div className='flex '>
            <input type="text" placeholder='Password'  />
            <FaRegEyeSlash className='relative sm:left-24 lg:left-8'/>
            </div>
            <hr />
        </div>



        </div>
        <div className='relative top-20 sm:top-0 lg:top-0'>
<div className='flex sm:w-[45vh] '>
    <MdOutlineCheckBoxOutlineBlank className='sm:h-10 sm:w-6 '/>
    <p className='relative sm:top-2 lg:top-2 sm:text-sm  text-xs text-gray-400 lg:text-sm'>I agree with <span className='font-semibold  text-black'>Privacy Policy</span> and <span className='font-semibold  text-black'>Terms of Use</span></p>
</div>
<div>
    <button  className='text-center bg-black sm:w-[40vh] lg:w-[90%] w-[35vh] sm:top-0 relative top-5 p-2  text-white sm:pt-1 sm:pb-1 rounded-lg text-lg'>Sign up</button>
</div>
</div>
        
      
          
         </div>
     

       </div>
       
        </div>
        
    </div>
  )
}

export default EhomePage
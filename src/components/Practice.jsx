import React from 'react'
import {Profile} from './Profile';

export default  function Practice() {
    return(
        <section className='flex flex-col items-center justify-between  h-screen'>
            
          <div className='flex justify-between h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='text-3xl font-bold text-[#00df9a]'>
            Amazing Scientist
            </h1>
            <ul className='flex s '>
                <li>< Profile/></li>
                <li>< Profile/></li>
                <li>< Profile/></li>
            </ul>
          </div>
        </section>
    )

}
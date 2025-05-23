import React from 'react'
import logo from '../assets/logo.png'
export default function navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
              <div>
                <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                <img src={logo} alt="Logo" className='w-10'/>
                Shopsy
                </a>
              </div>
              <div className='group'>
                <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-400
                px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
                '/>
              </div>
            </div> 
        </div>
        <div>
         
        </div>
    </div>
  )
}

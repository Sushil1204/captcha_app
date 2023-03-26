import React from 'react';
import { ThemeToggle } from './ThemeToggle';
const Navbar = ({setHelp}) => {
  return (
    <div className='flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black border-b-2 border-slate-700 px-5'>
        <h1 className='text-3xl font-bold dark:text-white'>Catcha APP</h1>
        <ThemeToggle/>
    </div>
  )
}

export default Navbar
import { navlinks } from '../constants'
import Menupopover from './Menupopover'
import Logo from './Logo'

import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 bg-[#8ed1fc] z-20 flex justify-between items-center py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8">
            <div className='flex grow-0 basis-1/3 md:hidden'>
                <Menupopover />
            </div>

             <div className='flex grow-0 justify-center md:justify-start'>
                <Logo />
            </div> 


            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-serif font-bold cursor-pointer text-[16px]
                   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  text-black `}
                >
                    <a>{nav.title}</a>
                </li>
            ))}
           </ul>

    </header>
  )
}

export default Navbar
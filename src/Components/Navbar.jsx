import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { navItems } from './../constants/index';
import {Menu , X} from 'lucide-react'
import { useState } from 'react';

const Navbar = () => {

    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setIsMobileDrawerOpen(!isMobileDrawerOpen)
    }

  return (

    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b
    border-neutral-700/80">

        <div className="flex justify-between container mx-auto relative  text-sm">

            <div className="flex justify-center items-center
            hover:scale-110 transition duration-150 cursor-pointer">
                <img className='h-10 w-10 mr-2 ' 
                src={logo} alt="Logo" />
                <span className='text-2xl tracking-tight'> Virtual R.</span>
            </div>

            <div className='hidden lg:flex '>
                <ul className='flex items-center gap-5'>
                 {navItems.map((item, index)=> (
                    <li className='hover:scale-110 transition duration-150
                    cursor-pointer' 
                    key={index}>
                        <a href={item.href}> {item.label} </a>
                    </li>
                 ))}
                </ul>
            </div>


            <div className='hidden lg:flex items-center gap-5'>
                <Link to={"#"} className='py-2 px-3 border rounded-lg
                hover:scale-110 transition duration-150'>
                <button  >Sign in</button>
                </Link>

                <Link to={"#"} className='py-2 px-3 rounded-lg border
                bg-gradient-to-r from-orange-500 to-orange-800
                hover:scale-110 transition duration-150'>
                <button>Create an account</button>
                </Link>
            </div>

            <div onClick={toggleDrawer} 
            className='lg:hidden md:flex flex-col justify-end pb-2'>
                <button>
                    {isMobileDrawerOpen? <X/> : <Menu/>}
                </button>

            </div>
    
          

        </div>
             {isMobileDrawerOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full
                p-12 pt-16 flex flex-col justify-center items-center lg:hidden
                gap-3'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-3'>
                            <a href={item.href}>. {item.label}</a>
                            </li>
                        ))}
                    </ul>

                <div className='flex gap-6'>
                <Link to={"#"} className='py-2 px-3 border rounded-lg'>
                <button>Sign in</button>
                </Link>
                <Link to={"#"} className='py-2 px-3 rounded-lg border
                bg-gradient-to-r from-orange-500 to-orange-800'>
                <button>Create an account</button>
                </Link>
                </div>
                </div>


            )}
    
    </div>
  )
}

export default Navbar

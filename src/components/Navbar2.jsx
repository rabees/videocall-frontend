import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-[#F0F0F0] shadow-md sticky top-0 z-50'>
      
      <div className='flex items-center'>
        <Link to='/room'>
          {/* <li className='p-4 hover:scale-105 nav-link'>Create Room</li> */}
          <button className='hidden md:flex rounded-md px-8 py-2 text-white border border-black bg-black hover:bg-transparent hover:text-black hover:border-black'>
            Video Meeting
          </button>
        </Link>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        onClick={handleNav}
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-200 bg-[rgb(255,255,255)] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <ul>
          <Link to='/room'>
            {/* <li className='p-4 border-b nav-link'>Code Space</li> */}
            <div className='w-[100%] flex justify-center items-center'>
              <button className='my-4 md:flex rounded-md px-8 py-2 text-white border border-black bg-black hover:bg-transparent hover:text-black hover:border-black'>
                Video Meeting
              </button>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;

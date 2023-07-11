"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [projectDropdown, setProjectDropdown] = useState(false);
  return (
    <nav className='max-w-[1440]px mx-auto flex items-center justify-between md:px-16 px-6 py-4'>
      <Link href='/' id='logo'>
        JDam
      </Link>
      {/*Desktop View*/}
      <div className='sm:flex hidden justify-between'>
        <div className='dropdown_link'>About</div>
        <div
          className='dropdown_link'
          onClick={() => setProjectDropdown((prev) => !prev)}
        >
          <div>
            Projects <span className='md:text-lg text-base'>&#9661;</span>
          </div>
          {projectDropdown && <div className="absolute bg-black flex flex-col gap-3 text-lg p-3 rounded-lg mt-1">
            <div>Photography portfolio</div>
            <div>Personal portfolio</div>
          </div>}
        </div>
        <div className='dropdown_link'>Contact</div>
      </div>
      {/*Mobile View*/}
      <div className="sm:hidden block">
        <Image
          src="/Hamburger_icon.svg"
          alt="Hamburger icon"
          width={35}
          height={35}
          className='object-contain cursor-pointer'
          onClick={() => setToggleDropdown((prev) => !prev)}
        />
        {toggleDropdown && (
          <div className="dropdown">
            <div className='dropdown_link'>About</div>
            <div
              className='dropdown_link'
              onClick={() => setProjectDropdown((prev) => !prev)}
            >
              Projects <span className='text-base'>&#9661;</span>
            </div>
            {projectDropdown && <div className="flex flex-col gap-2 text-base text-white w-full text-center">
              <div>Photography portfolio</div>
              <div>Personal portfolio</div>
            </div>}
            <div className='dropdown_link'>Contact</div>
          </div>
        )}


      </div>
    </nav>
  )
}

export default Navbar
import ContactModal from './ContactModal';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import Link from 'next/link'

function Menu2() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
     
        <div className="z-20">
        <div className="nav-bar  relative">
          <div className='lg:text-5xl cursor-pointer text-4xl text-white'>
          <Link href='#' >
            <VscIcons.VscMenu onClick={showSidebar} />
          </Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active ' : '  nav-menu'}>
          <ul className='nav-menu-items cursor-pointer' onClick={showSidebar}>
        
            <li className='navbar-toggle text-white text-4xl'>
           
              <Link href='#' >
            
                <MdIcons.MdArrowBack />
                  
              </Link>
              
              
              
            </li>
            
                <li>
                <Link href="/">
           <span className="nav-text cursor-pointer">
           <a >Home</a>
          </span>
        </Link> <Link href="about">
       <span className="nav-text cursor-pointer">
           <a>About</a>
        </span>
       </Link> <Link href="/">
       <span className="nav-text cursor-pointer">
           <a>Projects</a>
        </span>
       </Link>
     <Link href="/Blogshome">
     <span className="nav-text cursor-pointer">
           <a>Blog</a>
        </span>

       </Link> 
       <span className="nav-text cursor-pointer">   <ContactModal />   </span></li>
            
          
          </ul>
        </nav>
        </div>
    </>
  );
}

export default Menu2;
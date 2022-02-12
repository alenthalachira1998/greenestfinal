import Menuu from 'components/Menuu';
import React from 'react';
import Image from 'next/image'
import Div100vh from 'react-div-100vh';
import Link from 'next/link'
const image8 = () => {
  return <div>
    <Div100vh>
        <div className="absolute  top-4 w-screen  lg:right-10 text-center flex justify-center  z-10">
        <img
          src="/logo.png"
          alt="Picture of the author"
          className="md:h-14 md:w-auto  h-10 w-32 md:w-auto"
        />
         
      </div>
      <div className="absolute pl-2 pr-2 pb-2 pt-4 lg:px-4 lg:pb-4 lg:pt-6 flex w-screen justify-between ">
        
      <Link href='/'><a className="z-50"><img src="/logoo.png" className="md:ml-4 ml-2 md:w-8 w-8 h-auto  md:h-auto  drop-shadow-2xl brightness-150 saturate-200 "/></a></Link>
     <div className="z-40"></div> 
        <div className="flex text-3xl mr-3  lg:text-5xl text-gray-200 ">
     
       <Menuu/>
          {/* <div className="hover:text-pink-800 hover:animate-ping">
          <AiOutlineInstagram />
          </div>
          <Link href="https://www.facebook.com/GreenestBuildings/">
          <a className="hover:text-blue-400 hover:animate-ping">
          <AiOutlineFacebook />
          </a>
          </Link> */}
        </div>
      </div>
      <div className="w-screen flex justify-center   items-center h-screen">
      <img className="h-auto lg:h-75 w-screen  lg:w-auto"
    
      src="/images/resort/gallery/Page - 03-04.jpg"
     
    />
    </div>
    </Div100vh>
  </div>

};

export default image8;

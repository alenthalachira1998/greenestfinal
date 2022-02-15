import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Link from 'next/link'
const FooterPage = () => {

    const bg = {
        backgroundImage: 'url("/images/resort/page-10-map.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        
        
        }
        
    return (
        <>
        <div className="lg:hidden flex-col  font-Open   flex lg:h-screen h-full w-screen ">
            <div className="  lg:mt-36  mt-10 md:mt-28 lg:flex-row flex-col flex  justify-center h-3/5  ">
                <div className="flex mx-4 lg:mx-0 flex-col mr-20">
                    <h1 className="font-medium   text-base sm:text-2xl  lg:text-4xl  mt-8 md:mt-2  lg:mt-0" style={{ color: '#59a23e' }}>Distance from ONE</h1>

                    <div className="  text-xs xxxs:text-sm lg:mt-10   text-gray-800 sm:text-base lg:text-xl" >
                        <p className="lg:py-2 "> Mannanthala
                            - 4.7 km</p>

                        <p className="lg:py-2">Sreekaryam
                             - 5.3 km</p>
                        <p className="lg:py-2">Pothencode
                            - 5.8 km</p>
                        <p className="lg:py-2">Sabarigiri International School
                            - 1.4 km</p>
                        <p className="lg:py-2">College of Engineering
                            - 6.8 km</p>
                        <p className="lg:py-2">Technopark
                            - 7.5 Km</p>
                        <p className="lg:py-2">Medical College
                            - 8.8 km</p>

                        <p className="lg:py-2">LULU Mall
                            - 12.4 km</p>
                        <p className="lg:py-2">International Airport
                            - 13.8 km</p>
                    </div>
                </div>

                <img src='/images/resort/page-10-map.jpg' className=" lg:ml-8 h-auto" />


            </div>
            <div className="flex lg:flex-row  sm:bg-white flex-col w-screen  h-full justify-start  lg:px-20  ">
                <div className="text-sm  ml-4 lg:ml-0 mt-6 xs:mt-4  md:mt-4 text-gray-800  sm:text-base lg:text-xl"> <h1 className="font-medium xs:text-base sm:text-xl lg:text-2xl" >Contact us</h1><div>
                    <p >Greenest Buildings and Business Pvt Ltd,</p><p>
                        Nandavanam</p><p> Thiruvananthapuram - 695033</p>  <p className="flex"> <FaPhoneAlt className="mr-2" />0471-2991231, 8078079111</p><p className="flex"><AiOutlineMail className="mr-4" />mail@greenest.co.in</p></div></div>

                <div className="flex flex-col pb-4  ml-4 lg:ml-0  md:max-w-48 justify-center text-sm sm:text-base lg:text-xl"> <div className=" lg:text-2xl sm:text-base text-sm font-medium flex mt-2 items-center">
                    <div className="mr-2 md:text-xl lg:mr-8">About</div><div className="md:text-xl">Blog</div><div className="flex  md:space-x-2  lg:hidden md:text-5xl mx-2"><Link href="https://youtu.be/TjOALPVpDNo">
                        <a className="hover:text-pink-600 md:ml-2 md:text-4xl text-2xl hover:animate-ping"><AiFillYoutube /></a></Link></div><div className="text-xl  flex lg:hidden mx-2 md:mx-0"><Link href="https://www.facebook.com/GreenestBuildings/">
                            <a className="hover:text-blue-400   text-2xl md:text-4xl hover:animate-ping"><FaFacebookF /></a>
                        </Link></div><div className="   text-2xl md:text-4xl flex lg:hidden mx-2 md:mx-2"> <Link href="https://www.facebook.com/GreenestBuildings/">
                            <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div></div><div className="lg:flex hidden justify-center sm:text-3xl text-2xl lg:text-5xl  md:mt-5"><div className="mr-2 lg:mr-8"><Link href="https://youtu.be/TjOALPVpDNo">
                                <a className="hover:text-pink-600  hover:animate-ping"><AiFillYoutube /></a></Link></div>

                        <div className="mr-2 md:hidden lg:mr-8">
                            <Link href="https://www.facebook.com/GreenestBuildings/">
                                <a className="hover:text-blue-400 hover:animate-ping"><FaFacebookF /></a>
                            </Link></div>
                        <div className="mr-2 lg:mr-8">
                            <Link href="https://www.facebook.com/GreenestBuildings/">
                                <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div>
                    </div></div>
                <img src='/images/resort/Page - 04 Improved-01.jpg' className='lg:h-36 hidden lg:flex sm:h-28 h-24  self-center ' />      </div>
        </div>
       
       <div className='lg:flex hidden font-thin  font-Open flex-col  justify-center'>
           <div className='hidden lg:h-screen lg:flex' style={bg}><div className="flex-col pl-6 mt-3 text-white 2xl:text-2xl xl:text-lg desk:text-lg   ml-10 justify-center flex">  
           <h1 className="font-medium   text-base sm:text-3xl 2xl:text-3xl xl:text-3xl xl:mb-4  mb-6 lg:mt-10" style={{ color: '#59a23e' }}>Distance from ONE</h1> 
            <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1 "> Mannanthala
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#8202;&#8202;&#8202;&#8202;-&#160;4.7 km</p>

                        <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">Sreekaryam
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#8202;&#8202;-&#160;5.3 km</p>
                            <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">Technopark&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#8202;&#8202;
                            -&#160;7.5 km</p>
                        <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">Sabarigiri INT School
                        &#160;&#160;&#8202;-&#160;1.4 km</p>
                        <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">College of ENGG TVM
                            -&#160;6.8 km</p>
                      
                            <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">Pothencode
                            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#8202;&#8202;&#8202;&#8202;-&#160;5.8 km</p>
                        <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">Medical College
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; &#8202;&#8202;-&#160;8.8 km</p>

                        <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">LULU Mall&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#8202;&#8202;&#8202;&#8202;&#8202;
                            -&#160;12.4 km</p>
                        <p className="lg:py-2 xl:py-1 2xl:py-2 desk:py-1">International Airport
                        &#160;&#160;&#160;&#160; -&#160;13.8 km</p></div>
               </div>
          <div className= "lg:flex hidden   w-screen justify-between px-10 items-center pb-10 lg:pb-10 h-52">
          <div className="text-sm  ml-4 lg:ml-0 mt-8  md:mt-4 text-gray-800 sm:text-base lg:text-xl"> <h1 className="font-medium text-sm sm:text-xl lg:text-2xl" >Contact us</h1><div>
                    <p >Greenest Buildings and Business Pvt Ltd,</p><p>
                        Nandavanam</p><p> Thiruvananthapuram - 695033</p>  <p className="flex"> <FaPhoneAlt className="mr-2" />0471-2991231, 8078079111</p><p className="flex"><AiOutlineMail className="mr-4" />mail@greenest.co.in</p></div></div>

     
                        <div className="flex flex-col pb-4  ml-4 lg:ml-0  md:max-w-48 justify-center text-sm sm:text-base lg:text-xl items-center"> <div className=" lg:text-2xl sm:text-base text-sm mb-4 font-medium flex 4  mt-2 items-center">
                    <div className="mr-2  lg:mr-8">About</div><div className="mr-8">Blog</div><div className="flex lg:hidden lg:mx-0 md:ml-2 mx-2"><Link href="https://youtu.be/TjOALPVpDNo">
                        <a className="hover:text-pink-600  text-2xl hover:animate-ping mx-2"><AiFillYoutube /></a></Link></div><div className="text-xl flex lg:hidden mx-2 md:mx-0"><Link href="https://www.facebook.com/GreenestBuildings/">
                            <a className="hover:text-blue-400   text-2xl hover:animate-ping"><FaFacebookF /></a>
                        </Link></div><div className="   text-2xl flex lg:hidden mx-2 "> <Link href="https://www.facebook.com/GreenestBuildings/">
                            <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div></div><div className="flex  justify-center sm:text-3xl text-2xl lg:text-5xl  md:mt-5"><div className="mr-2 lg:mr-8"><Link href="https://youtu.be/TjOALPVpDNo">
                                <a className="hover:text-pink-600 hover:animate-ping"><AiFillYoutube /></a></Link></div>

                        <div className="mr-2 lg:mr-8">
                            <Link href="https://www.facebook.com/GreenestBuildings/">
                                <a className="hover:text-blue-400 hover:animate-ping"><FaFacebookF /></a>
                            </Link></div>
                        <div className="mr-2 lg:mr-8">
                            <Link href="https://www.facebook.com/GreenestBuildings/">
                                <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div>
                    </div></div>
        <div className= "">        <img src='/images/resort/Page - 10- footer -IGBC Member.png' className='lg:h-36 hidden lg:flex sm:h-28 h-24  self-center ' />      </div>
          </div>
       </div>
  



        
</>
    )
}

export default FooterPage

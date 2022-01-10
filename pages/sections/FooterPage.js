import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link'
const FooterPage = () => {
    

    return (
        <div className="flex-col  flex h-screen w-screen ">
            <div className="  lg:mt-36 xxxs:mt-20 mt-16  lg:flex-row flex-col flex  justify-center h-3/5  ">
                <div className="flex  flex-col mr-20">
                    <h1 className="font-medium   text-base sm:text-3xl lg:text-4xl  mt-8  lg:mt-0" style={{ color: '#59a23e' }}>Distance from ONE</h1>

                    <div className="text-xs xxxs:text-sm lg:mt-10  text-gray-900 sm:text-base lg:text-xl" >
                        <p className="lg:py-2"> Mannanthala
                           - 4.7Km</p>
                        <p className="lg:py-2">Sreekaryam
                            - 5.3 km</p>

                        <p className="lg:py-2">Sreekaryam
                            -5.3km</p>
                        <p className="lg:py-2">Pothencode
                            - 5.8 Km</p>
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

                <img src='/images/resort/page-10-map.jpg' className=" h-auto" />


            </div>
            <div className="flex sm:flex-row flex-col w-screen h-full justify-start md:justify-between lg:px-20  ">
                <div className="text-sm mt-10 xs:mt-16 md:mt-8 text-gray-900 sm:text-base lg:text-xl"> <h1 className="font-medium text-sm sm:text-base lg:text-2xl" >Contact us</h1><div>
                    <p >Greenest Buildings and Business pvt ltd</p><p>
                        Nandavanam</p><p> Thiruvananthapuram - 695033</p>  <p className="flex"> <FaPhoneAlt className="mr-2" />0471-2991231, 8078079111</p><p className="flex"><AiOutlineMail className="mr-4" />mail@greenest.co.in</p></div></div>

                <div className="flex flex-col  md:max-w-48 justify-center text-sm sm:text-base lg:text-xl"> <div className=" lg:text-2xl sm:text-base text-sm font-medium flex mt-2 items-center">
                    <div className="mr-2 lg:mr-8">About</div><div>Blog</div><div className="flex md:hidden md:mx-0 mx-2"><Link href="https://youtu.be/TjOALPVpDNo">        
                <a className="hover:text-pink-600 hover:animate-ping"><AiFillYoutube /></a></Link></div><div className="text-xl flex md:hidden mx-2 md:mx-0"><Link href="https://www.facebook.com/GreenestBuildings/">
                        <a className="hover:text-blue-400 hover:animate-ping"><FaFacebookF /></a>
                    </Link></div><div className="text-xl flex md:hidden mx-2 md:mx-0"> <Link href="https://www.facebook.com/GreenestBuildings/">
                        <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div></div><div className="md:flex hidden justify-center sm:text-3xl text-2xl lg:text-5xl  md:mt-5"><div className="mr-2 lg:mr-8"><Link href="https://youtu.be/TjOALPVpDNo">        
                <a className="hover:text-pink-600 hover:animate-ping"><AiFillYoutube /></a></Link></div>
           
                <div className="mr-2 lg:mr-8">
                    <Link href="https://www.facebook.com/GreenestBuildings/">
                        <a className="hover:text-blue-400 hover:animate-ping"><FaFacebookF /></a>
                    </Link></div>
                    <div className="mr-2 lg:mr-8">
                    <Link href="https://www.facebook.com/GreenestBuildings/">
                        <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div>
                    </div></div>
                <img src='/images/resort/Page - 04 Improved-01.jpg' className='lg:h-36 hidden lg:flex sm:h-28 h-24  self-center ' />      </div>
        </div>

    )
}

export default FooterPage

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link'

const FooterContact = () => {
  return <div>
      <div className="flex sm:flex-row  sm:bg-white flex-col w-screen  h-full justify-start md:justify-between lg:px-20  ">
                <div className="text-sm  ml-4 lg:ml-0 mt-8  md:mt-8 text-gray-900 sm:text-base lg:text-xl"> <h1 className="font-medium text-sm sm:text-base lg:text-2xl" >Contact us</h1><div>
                    <p >Greenest Buildings and Business Pvt Ltd,</p><p>
                        Nandavanam</p><p> Thiruvananthapuram - 695033</p>  <p className="flex"> <FaPhoneAlt className="mr-2" />0471-2991231, 8078079111</p><p className="flex"><AiOutlineMail className="mr-4" />mail@greenest.co.in</p></div></div>

                <div className="flex flex-col pb-4  ml-4 lg:ml-0  md:max-w-48 justify-center text-sm sm:text-base lg:text-xl"> <div className=" lg:text-2xl sm:text-base text-sm font-medium flex mt-2 items-center">
                    <div className="mr-2  lg:mr-8">About</div><div>Blog</div><div className="flex lg:hidden md:mx-0 mx-2"><Link href="https://youtu.be/TjOALPVpDNo">
                        <a className="hover:text-pink-600  text-2xl hover:animate-ping"><AiFillYoutube /></a></Link></div><div className="text-xl flex md:hidden mx-2 md:mx-0"><Link href="https://www.facebook.com/GreenestBuildings/">
                            <a className="hover:text-blue-400   text-2xl hover:animate-ping"><FaFacebookF /></a>
                        </Link></div><div className="   text-2xl flex md:hidden mx-2 md:mx-0"> <Link href="https://www.facebook.com/GreenestBuildings/">
                            <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div></div><div className="md:flex hidden justify-center sm:text-3xl text-2xl lg:text-5xl  md:mt-5"><div className="mr-2 lg:mr-8"><Link href="https://youtu.be/TjOALPVpDNo">
                                <a className="hover:text-pink-600 hover:animate-ping"><AiFillYoutube /></a></Link></div>

                        <div className="mr-2 lg:mr-8">
                            <Link href="https://www.facebook.com/GreenestBuildings/">
                                <a className="hover:text-blue-400 hover:animate-ping"><FaFacebookF /></a>
                            </Link></div>
                        <div className="mr-2 lg:mr-8">
                            <Link href="https://www.facebook.com/GreenestBuildings/">
                                <a className="hover:text-pink-600 hover:animate-ping"><AiOutlineInstagram /></a></Link></div>
                    </div></div></div>
  </div>;
};

export default FooterContact;


import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';

import Link from 'next/link'
import Sound from '../../components/sound';
const bg = {
    background:'url(/images/main11-min.gif)',
    objectFit:'cover'



 }

const MainHome = () => {
    return (
        <>
            <section id="main-home">



                <div className="h-screen lg:h-screen relative" >
                <div className="h-screen w-screen" style={bg}>
             
                    <div className="absolute  
                     h-full z-10 lg:h-screen bg-black w-full opacity-40 flex flex-col items-center justify-center"></div>
                    

                    <div className="relative  ">

                        <div className="flex-col h-screen">

                            <div className="flex  flex-col items-center h-full   justify-center">

                                <div className=" flex flex-col  lg:max-w-6xl md:max-w-xl max-w-s   px-10 h-3/5 md:h-2/5 xl:h-2/5  justify-center ">
                                    <div className="text-white lg:text-2xl pb-6 text-sm z-20 lg:text-center lg:font-normal flex flex-col justify-center "><h1 className="lg:pb-6 pb-2  font-bold text-white text-lg lg:text-4xl  "> Greenest <span className="text-green-600">ONE</span> </h1> Greenest ONE offers our customers a functionally designed home with enhanced quality of space and life. Project is located in a calm, clean, well connected and lush green location
                                        within Thiruvananthapuram Corporation, at Njandoorkonam. Project consist of 30 high
                                        performance individualvilla units, club house and lots of recreational and easy go common

                                        amenities.&#160;&#160;&#160;&#160;&#160;&#160;&#160; </div>
                                    <div className="self-start lg:self-center">
                                       
                                        <div className="text-center h-6 border-b-2"></div>
                                    </div>

                                    <span className="text-white self-start lg:self-center lg:mt-4 lg:text-7xl z-10 text-4xl pt-8 font-thin  animate-bounce "> <IoIosArrowRoundDown /></span>
                                    </div>
                                </div>
                              
                            </div>
                           
                          







                        </div>
                    </div>


                </div>



            </section>
        </>
    )
}

export default MainHome;


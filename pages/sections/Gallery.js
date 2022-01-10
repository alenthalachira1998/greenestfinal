import React from 'react'
import Iframe from "react-iframe";
import react, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from 'react-icons/io';
import {
    VscArrowRight,
    VscArrowLeft,
  } from "react-icons/vsc";
const Gallery = () => {
    const [next, setNext] = useState(false);
    useEffect(() => {
      console.log("changed");
    }, [next]);

    return (
       
   
        <>
             { next ? (
                   <div className="flex flex-col  h-screen w-screen">
     
                   <div className="flex h-screen w-screen   ">
                       
                 
                      
                          
                   <div className="hidden lg:flex ">
                       <button className="" onClick={() => setNext(false)}>
                  <VscArrowLeft className=" ml-10 z-20  text-gray-500 hover:text-green-600 animate-pulse  lg:text-6xl text-6xl  font-thin " />
                </button>
                       </div>
      
                     
              
                   
      
                       <div className="  flex-grow    flex   lg:items-center items-start ">
                       <div className="grid lg:mx-28  relative  md:mt-0 sm:gap-2 landscape1:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xs:grid-cols-2 grid-cols-2  h-full xs:h-full w-11/12 sm:h-full xs:w-11/12  lg:h-3/4  sm:w-11/12 2xl:w-11/12 md:w-11/12  xl:h-11/12 2xl:h-full  p-4 gap-4  lg:content-center justify-center  lg:gap-4  ">
                        <div className=" mt-24 md:mt-28   absolute w-full   "><h1 className=" font-medium text-center xl:text-left md:text-3xl text-xl xs:text-xl "  style={{color:'#59a23e'}}>Gallery</h1></div>

                 <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75 mt-32 xl:mt-20    "><iframe className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="https://www.youtube.com/embed/TjOALPVpDNo" ></iframe> </div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75 mt-32 xl:mt-20 "> <img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Recreational pond_4_11zon.jpg" ></img></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75 xl:mt-20  "><img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Work from Nature_6_11zon.jpg" ></img> </div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75"><img className="shadow-xl resize-none  rounded-2xl border-2xl   h-full w-full     object-cover    " src="../images/resort/Tree House_5_11zon.jpg" ></img></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75"> <img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Club house_1_11zon.jpg" ></img></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75"> <img className="shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Tree House_5_11zon.jpg" ></img> </div>
                   
                       </div>
                  
                       
                       </div>
      
                       </div>
      
      
                    
      
                  
                   {/* <div className="2xl:flex absolute text-gray-400 justify-center 2xl:bottom-8  lg:bottom-36   hidden  w-screen z-30 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl"><div> <IoIosArrowRoundDown /></div></div> */}
                   <div className="flex  text-gray-400 h-30    right-5 height-36 absolute items-center  bottom-0  z-30 lg:text-3xl md:text-3xl text-xl font-medium   "  style={{color:'#59a23e'}}><h4 className="">Explore </h4><img src="greenone.png" className="lg:w-18 lg:h-18 md:w-24 md:h-12 2xl:w-24 2xl:h-12  w-16 h-8 bottom-0" /> <i className="text-4xl sm:text-5xl text-gray-400 self-center"><IoIosArrowRoundForward /></i> </div>   </div>
      
       
             ) : (
                <div className="flex flex-col h-screen w-screen">
                <div className="flex h-screen w-screen ">
                
                
                <div className=" flex-grow flex lg:items-center items-start ">
                <div className="grid lg:mx-28 relative md:mt-0 sm:gap-2 landscape1:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xs:grid-cols-2 grid-cols-2 h-full xs:h-full w-11/12 sm:h-full xs:w-11/12 lg:h-3/4 sm:w-11/12 2xl:w-11/12 md:w-11/12 xl:h-11/12 2xl:h-full p-4 gap-4 lg:content-center justify-center lg:gap-4 ">
                <div className=" mt-24 md:mt-28 absolute w-full "><h1 className=" font-medium text-center xl:text-left md:text-3xl text-xl xs:text-xl " style={{color:'#59a23e'}}>Gallery</h1></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75 mt-32 xl:mt-20 "> <img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Work from Nature_6_11zon.jpg" ></img></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75 mt-32 xl:mt-20 "> <img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Recreational pond_4_11zon.jpg" ></img></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75 xl:mt-20 row-span-2 "> <iframe className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="https://www.youtube.com/embed/TjOALPVpDNo" ></iframe></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75"> <img className="shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Tree House_5_11zon.jpg" ></img></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75"> <img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Club house_1_11zon.jpg" ></img></div>
                <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75"> </div>
                
                </div>
                <div className="hidden lg:flex ">
                <button className="" onClick={() => setNext(true)}>
                <VscArrowRight className=" -ml-28 z-20 text-gray-500 hover:text-green-600 animate-pulse lg:text-6xl text-6xl font-thin " />
                </button>
                </div>
                </div>
                
                </div>
                
                
                {/* <div className="2xl:flex absolute text-gray-400 justify-center 2xl:bottom-8 lg:bottom-36 hidden w-screen z-30 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl"><div> <IoIosArrowRoundDown /></div></div> */}
                <div className="flex text-gray-400 h-30 right-5 height-36 absolute items-center bottom-0 z-30 lg:text-3xl md:text-3xl text-xl font-medium " style={{color:'#59a23e'}}><h4 className="">Explore </h4><img src="greenone.png" className="lg:w-18 lg:h-18 md:w-24 md:h-12 2xl:w-24 2xl:h-12 w-16 h-8 bottom-0" /> <i className="text-4xl sm:text-5xl text-gray-400 self-center"><IoIosArrowRoundForward /></i> </div> </div>
                
              
             )}
         </>
        

    )
}

export default Gallery;

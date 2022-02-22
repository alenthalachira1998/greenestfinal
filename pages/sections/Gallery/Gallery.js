import React from 'react'
;
import Iframe from "react-iframe";
import react, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from 'react-icons/io';
import {
  VscArrowRight,
  VscArrowLeft,
} from "react-icons/vsc";
import Link from 'next/link'

const Gallery = () => {
  const [next, setNext] = useState(false);
  useEffect(() => {
    console.log("changed");
  }, [next]);

  return (


    <section id="gallery" className ="overfloe-hidden">
    
        {next ? (

          <div className="flex  absolute flex-col inset-0  h-full w-screen">

            <div className="flex h-full w-screen   ">




              <div className="hidden lg:flex ">
                <button className="" onClick={() => setNext(false)}>
                  <VscArrowLeft className=" ml-10 z-20  text-gray-500 hover:text-green-600 animate-pulse  lg:text-6xl text-6xl  font-thin " />
                </button>
              </div>
              {/* <div className="lg:hidden flex text-gray md:bottom-28  z-20 absolute  text-center bottom-12 sm:bottom-4  w-screen  xs:bottom-44 lg:text-8xl text-6xl  font-thin ">
                  <button className="" onClick={() => setNext(false)}>
                    <VscArrowLeft className="w-screen animate-pulse" />
                  </button>
                </div> */}




              <div className="  flex-grow    flex   lg:items-center items-center ">
                <div className="grid mx-6 lg:mx-28  relative  md:mt-0 sm:gap-2 landscape1:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xs:grid-cols-2 grid-cols-2  h-full xs:h-full w-11/12 sm:h-full xs:w-11/12  lg:h-3/4  sm:w-11/12 2xl:w-11/12 md:w-11/12  xl:h-11/12 2xl:h-full  p-4 gap-2   lg:content-center content-center  lg:gap-4  ">
                  {/* <div className=" mt-36 2xl:mt-28 lg:mt-16 absolute w-full desk:mt-44  iphonex:mt-52 xs:mt-22 xxs:mt-44 "><h1 className=" font-medium text-center xl:text-left md:text-3xl text-xl xs:text-xl  " style={{ color: '#59a23e' }}>Gallery</h1></div> */}
                  <div className="grid col-span-2 lg:col-span-3  mb-4 self-center  font-medium text-center xl:text-left md:text-3xl text-xl xs:text-xl " style={{ color: '#59a23e' }}>Gallery </div>
                  <div className=" flex justify-center flex-col text-gray-700  "> <Link href="sections/Gallery/image5"><a><img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/gallery/Page - 03-06.jpg" ></img></a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700 "> <Link href="sections/Gallery/image6"><a> <img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Page - 03-03-min.jpg" ></img></a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700  "><Link href="sections/Gallery/image7"><a><img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Work from Nature_6_11zon.jpg" ></img> </a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700  "><Link href="sections/Gallery/image8"><a> <img className="shadow-xl resize-none  rounded-2xl border-2xl   h-full w-full     object-cover    " src="../images/resort/Page - 03-04-min.jpg" ></img></a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700   sm:mb-0 "><Link href="sections/Gallery/image9"><a>  <img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/gallery/Page - 04 Improved-02.jpg " ></img></a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700  sm:mb-0"><Link href="sections/Gallery/image10"><a> <img className="shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Page - 04 Improved-03-min.jpg" ></img> </a></Link></div>
                  <div className="lg:hidden flex  mt-5 col-span-2 text-gray  z-20  text-center lg:text-8xl text-6xl justify-center  font-thin ">
                  <button className="" onClick={() => setNext(false)}>
                    <VscArrowLeft className="w-screen animate-pulse" />
                  </button>
                </div>
                </div>


              </div>

            </div>





            {/* <div className="2xl:flex absolute text-gray-400 justify-center 2xl:bottom-8  lg:bottom-36   hidden  w-screen z-30 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl"><div> <IoIosArrowRoundDown /></div></div> */}
            {/* <div className="flex  text-gray-400 h-30    right-5 height-36 absolute items-center  bottom-0  z-30 lg:text-3xl md:text-3xl text-xl font-medium   " style={{ color: '#59a23e' }}><h4 className="">Explore </h4><img src="greenone.png" className="lg:w-18 lg:h-18 md:w-24 md:h-12 2xl:w-24 2xl:h-12  w-16 h-8 bottom-0" /> <i className="text-4xl sm:text-5xl text-gray-400 self-center"><IoIosArrowRoundForward /></i> </div>   */}</div> 


        ) : (
          <div className="flex absolute inset-0 mt-5 flex-col h-full w-screen">
            <div className="flex h-full w-screen ">


              <div className=" flex-grow flex lg:items-center items-center ">
                <div className="grid lg:mx-28  h-full relative md:mt-0 sm:gap-2 mx-6 md:mx-0 landscape1:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xs:grid-cols-2 grid-cols-2   w-11/12 sm:h-full xs:w-11/12 lg:h-3/4 sm:w-11/12 2xl:w-11/12 md:w-11/12 xl:h-11/12 2xl:h-full p-4 gap-2 lg:content-center content-center lg:gap-4 ">
                  {/* <div className=" mt-36 md:mt-36 absolute w-full 2xl:mt-28 lg:mt-16  xs:mt-22  iphonex:mt-52 xxs:mt-44 desk:mt-44  "><h1 className=" >Gallery</h1></div> */}
                  <div className="grid col-span-2 lg:col-span-3  mb-4 self-center  font-medium text-center xl:text-left md:text-3xl text-xl xs:text-xl " style={{ color: '#59a23e' }}>Gallery </div>
                  <div className=" flex justify-center flex-col text-gray-700   "> <Link href="sections/Gallery/image1"><a><img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Page - 06 Green policy-06-min.jpg" ></img></a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700  "> <Link href="sections/Gallery/image2"><a><img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/gallery/Page - 06 Green policy-05.jpg" ></img></a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700 row-span-2    sm:mb-0"> <iframe className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="https://www.youtube.com/embed/TjOALPVpDNo" ></iframe></div>
                  <div className=" flex justify-center flex-col text-gray-700 hover:transform scale-75"> <Link href="sections/Gallery/image3"><a><img className="shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/gallery/Page - 04 Improved-05.jpg" ></img></a></Link></div>
                  <div className=" flex justify-center flex-col text-gray-700  sm:mb-0"> <Link href="sections/Gallery/image4"><a><img className=" shadow-xl resize-none rounded-2xl border-2xl h-full w-full object-cover " src="../images/resort/Page - 03-05.jpg" ></img></a></Link></div>
                  <div className="lg:hidden flex text-gray  z-20  justify-center col-span-2  text-center mt-5  lg:text-8xl text-6xl  font-thin ">
                  <button className="" onClick={() => setNext(true)}>
                    <VscArrowRight className="w-screen animate-pulse" />
                  </button>
                </div>

                </div>
                <div className="hidden lg:flex ">
                  <button className="" onClick={() => setNext(true)}>
                    <VscArrowRight className=" -ml-28 z-20 text-gray-500 hover:text-green-600 animate-pulse  lg:text-6xl text-6xl font-thin " />
                  </button>
                </div>
                {/* <div className="lg:hidden xs:bottom-32 xxs:mb-32 flex text-gray  z-20 absolute  text-center bottom-12 sm:bottom-4  md:bottom-28 w-screen  lg:text-8xl text-6xl  font-thin ">
                  <button className="" onClick={() => setNext(true)}>
                    <VscArrowRight className="w-screen animate-pulse" />
                  </button>
                </div> */}
              </div>

            </div>


            {/* <div className="2xl:flex absolute text-gray-400 justify-center 2xl:bottom-8 lg:bottom-36 hidden w-screen z-30 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl"><div> <IoIosArrowRoundDown /></div></div> */}
            {/* <div className="flex text-gray-400 h-30 right-5 height-36 absolute items-center bottom-0 z-30 lg:text-3xl md:text-3xl text-xl font-medium " style={{color:'#59a23e'}}><h4 className="">Explore </h4><img src="greenone.png" className="lg:w-18 lg:h-18 md:w-24 md:h-12 2xl:w-24 2xl:h-12 w-16 h-8 bottom-0" /> <i className="text-4xl sm:text-5xl text-gray-400 self-center"><IoIosArrowRoundForward /></i> </div> */}</div>


        )}
   
    </section>


  )
}

export default Gallery;

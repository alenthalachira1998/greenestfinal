
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundDown } from 'react-icons/io';
import { BiMouse } from 'react-icons/bi';


export default class SimpleSlider extends Component {
  render() {
    const bg = {
      backgroundImage: 'url("/images/resort/Pageslide1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'100vh'
   
      };
      const bgOne = {
        backgroundImage: 'url("/images/resort/Page - 01 - Slide 2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height:'100vh'
        
        };
        const bgTwo = {
          backgroundImage: 'url("/images/resort/Page - 01 - Slide 3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height:'100vh'
          
          };
          const bgThree = {
            backgroundImage: 'url("/images/resort/Page - 01 - Slide 4.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'100vh'
            
            };
            const bgFour = {
              backgroundImage: 'url("/images/resort/Page - 01 - Slide 5.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height:'100vh'
             
              
              };

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      className: "slides"
    
  
    };
  
    return (
    
      <div className=" overflow-hidden">
        
  <span className=" text-white animate-bounce  z-20 absolute  text-center bottom-6 sm:bottom-4  w-screen  lg:text-8xl text-6xl  font-thin"><IoIosArrowRoundDown className="w-screen fade-in-text" /></span>
        <Slider   {...settings}>
          <div>
        <div className="  w-screen lg:h-screen   relative" style={bg}>
<div className="absolute bg-black h-full lg:h-screen w-full opacity-5 flex flex-col items-center justify-center"></div>
<div className="relative ">

<div className="flex-col  w-screen flex h-screen items-center">

  <h1 className="xl:mt-32 2xl:mt-36 mt-36  mb-0  desk:text-5xl sm:mb-10 text-2xl sm:text-5xl  xl:4xl 2xl:text-6xl">FOR YOUR NEXT HOLIDAY</h1>
  <h1 className="font-Tourney  sm:-mt-5 mt-2 mb-2 desk:text-7xl xl:text-6xl sm:mb-10 text-4xl sm:text-7xl 2xl:text-8xl ">&quot;COME HOME&quot;</h1>
  <h1 className="font-Caveat sm:-mt-5 text-xl sm:text-3xl">Introducing</h1>
  <img  className="  2xl:w-56 lg:w-48 xl:w-44  desk:w-40 z-30 w-36 drop-shadow-xl "src="/images/OneLogo.png"/>

 {/* <span className="  z-20 flex flex-col w-screen h-screen sm:text-4xl text-3xl  md:text-5xl lg:text-6xl  text-gray-400  font-thin animate-pulse "><span className="absolute bottom-2/4"><BiMouse className="" /><p className="lg:text-sm md:text-base text-xs font-bold ">ScrollPrev</p></span></span>  */}
           </div>
           
           </div>
            
           </div>
            
           
          </div>
          
          <div>
          <div className="h-screen  z-50 w-screen lg:h-screen relative" style={bgOne}>
<div className="absolute bg-black h-full lg:h-screen w-full opacity-5 flex flex-col items-center justify-center"></div>
<div className="relative ">

<div className="flex-col mx-4 w-screen sm:justify-center justify-start flex h-screen items-center ">
  <div className="mt-56 sm:mx-4 text-center mr-6 w-screen  sm:mt-0">

  <h1 className="sm:mb-5 text-2xl  sm:text-5xl font-medium text-white lg:text-6xl">LUSH COMMUNITY</h1>
  <h2 className="mt-2 font-medium mr-2  text-base sm:text-3xl text-white lg:text-5xl">Serene gardens . Rich bio diversity</h2>

  </div>
           </div>
           
           </div>
            
           </div>
         
          </div>
          <div>
            <h3><div className="h-screen  w-screen lg:h-screen relative" style={bgTwo}>
<div className="absolute bg-black h-full lg:h-screen w-full opacity-5 flex flex-col items-center justify-center"></div>
<div className="relative ">

<div className="flex-col w-screen  flex h-screen items-center     ">

  <h1 className="   sm:mb-5 text-2xl sm:text-5xl text-gray-900 mt-48 lg:text-6xl font-semibold">Zero Electricity Bill</h1>


 
           </div>
           
           </div>
            
           </div></h3>
          </div>
          <div>
          <div>
            <h3><div className="h-screen  w-screen lg:h-screen relative" style={bgThree}>
<div className="absolute bg-black h-full lg:h-screen w-full opacity-5 flex flex-col items-center justify-center"></div>
<div className="relative ">

<div className="flex-col w-screen flex h-screen items-center">

  <h1 className="sm:mb-5 text-2xl sm:text-5xl xl:mt-32 2xl:mt-44 text-gray-900 mt-48 lg:text-6xl font-semibold">Panoramic Views</h1>
  <h2 className="mt-2 font-medium  text-base sm:text-3xl text-gray-900 lg:text-5xl">From Sunrise to Sunset</h2>

 
           </div>
           
           </div>
            
           </div></h3>
          </div>

          </div>
         <div>
          <div className="h-screen  w-screen lg:h-screen relative" style={bgFour}>
<div className="absolute bg-black h-full lg:h-screen w-full opacity-5 flex flex-col items-center justify-center"></div>
<div className="relative ">

<div className="flex-col w-screen   flex h-screen items-center">
  <div className="mx-10 sm:mx-0 flex flex-col items-center">

  <h1 className="sm:mb-5 text-2xl sm:text-5xl font-medium mt-48 text-white lg:text-6xl">High performance</h1>
  <h2 className="mt-2 hidden sm:block font-medium text-xs sm:text-2xl text-white lg:text-4xl"> Energy <span className="font-bold ">.</span> Water <span className="font-bold">.</span> Build Quality <span className="font-bold">.</span> Health and Welbeing <span className="font-bold">.</span> Safety</h2>
  <h2 className="mt-2 sm:hidden font-medium text-base sm:text-3xl text-white lg:text-4xl">Energy <span className="font-bold ">.</span> Water <span className="font-bold">.</span> Build Quality  <br/> <span className="font-bold">.</span> Health and Welbeing <span className="font-bold">.</span> Safety</h2>
  </div>
 
           </div>
         
           </div>
            
           </div>
          </div>
     
        </Slider>
      
      </div>
   
    
    );
  }
}

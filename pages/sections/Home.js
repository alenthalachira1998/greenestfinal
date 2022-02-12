

import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';
import Iframe from "react-iframe"

const HomePageGreen = () => {
const bg = {
backgroundImage: 'url("/images/resort/Home.jpg")',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',



}

return (
<section id="  home" className="overflow-hidden">

<div className=" relative h-full" style={bg}>
<div className="absolute bg-black  w-full opacity-5 flex flex-col items-center justify-center h-screen"></div>
<div className="relative ">
<div className="flex-col flex   text-center h-screen">

<div className=" text-gray-800 mt-36 3xl:mt-72 lg:text-xl 3xl:text-9xl  2xl:mt-48 tb:text-2xl  xl:text-2xl  2xl:text-3xl  text-sm  2xl:font-normal flex flex-col items-center justify-center  " >
&quot;Lets build a Home <br/> that sings with the rain<br/> hums with the Earth<br/> and sieving the sun for night.&quot;<br/>
<h1 className="text-gray-800 xl:text-3xl 3xl:text-10xl    2xl:text-3xl tb:text-2xl lg:text-xl text-base font-bold  mt-2 2xl:mt-4">Buildings that breathe</h1>
<img  className=" 2xl:mt-4 mt-2 2xl:w-52 3xl:w-60 z-30 w-32 xl:w-44 tb:w-44 drop-shadow-xl "src="/images/OneLogo.png"/>
</div>
<span className="text-white  z-20 absolute   text-center bottom-12 sm:bottom-4  w-screen  2xl:text-8xl text-6xl  font-thin"><IoIosArrowRoundDown className="w-screen animate-bounce" /></span>
</div>
</div>


</div>





</section>
)
}
export default HomePageGreen;
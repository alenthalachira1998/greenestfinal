

import Whatsapp from 'components/whatsapp';
import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';
import Iframe from "react-iframe"
const HomePageGreen = () => {
const bg = {
backgroundImage: 'url("/images/resort/Home.jpg")',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
height:'100%',



}

return (
<section id="home" className="inset-0 absolute">

<div className=" relative" style={bg}>
<div className="absolute bg-black  w-full opacity-5 flex flex-col items-center justify-center h-full"></div>
<div className="relative ">
<div className="flex-col flex   text-center ">

<div className=" text-gray-800 mt-28 font-normal  3xl:mt-72 lg:text-xl 3xl:text-9xl desk:text-xl xl:mt-28  2xl:mt-32 tb:text-2xl  xl:text-xl  2xl:text-3xl  text-sm  2xl:font-normal flex flex-col items-center justify-center  " >
&quot;Lets build a Home <br/> that sings with the rain<br/> hums with the Earth<br/> and capture the sun, for the night.&quot;<br/>
<h1 className="text-gray-800 xl:text-2xl 3xl:text-10xl  desk:text-2xl  2xl:text-3xl tb:text-2xl lg:text-xl text-base font-bold  mt-2 2xl:mt-4">Buildings that breathe</h1>

<img  className=" 2xl:mt-4 mt-2 2xl:w-52 3xl:w-60  desk:w-40 z-30 w-32 xl:w-40 tb:w-44 drop-shadow-xl "src="/images/OneLogo.png"/>
</div>

</div>
</div>


</div>

<span className="text-white  z-20 absolute   text-center bottom-0 sm:bottom-4  w-screen  2xl:text-8xl text-6xl  font-thin"><IoIosArrowRoundDown className="w-screen animate-bounce" /></span>
<div className="bottom-2 absolute lg:left-6 left-3  lg:z-30 "><Whatsapp/></div>
</section>
)
}
export default HomePageGreen;
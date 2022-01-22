

import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';
import Iframe from "react-iframe"
import Div100vh from 'react-div-100vh'
const HomePageGreen = () => {
const bg = {
backgroundImage: 'url("/images/resort/Home.jpg")',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
height:'100vh',


}

return (
<section id="home">
<Div100vh>
<div className=" relative" style={bg}>
<div className="absolute bg-black  w-full opacity-5 flex flex-col items-center justify-center" style={{height:'100vh'}}></div>
<div className="relative ">
<div className="flex-col flex   text-center " style={{height:'100vh'}}>

<div className=" text-gray-900  mt-36 lg:text-3xl  text-sm  lg:font-normal flex flex-col items-center justify-center  " >
&quot;Lets build a Home <br/> that sings with the rain<br/> hums with the Earth<br/> and slieving the sun for night.&quot;<br/>
<h1 className="text-gray-900 lg:text-4xl text-xl font-bold mt-6 lg:mt-10">Buildings that breathe</h1>
<img  className=" lg:mt-10 mt-6 lg:w-60 z-30 w-36 drop-shadow-xl "src="/images/OneLogo.png"/>
</div>
<span className="text-white  z-20 absolute  text-center bottom-20 sm:bottom-4  w-screen  lg:text-8xl text-6xl  font-thin"><IoIosArrowRoundDown className="w-screen animate-bounce" /></span>
</div>
</div>


</div>

</Div100vh>



</section>
)
}
export default HomePageGreen;
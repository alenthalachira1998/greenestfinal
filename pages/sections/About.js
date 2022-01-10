

import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';
import Iframe from "react-iframe"
const About = () => {
const bg = {
backgroundImage: 'url("/images/club house.jpg")',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',

}

return (
<section id="about">

<div className="h-screen lg:h-screen relative" style={bg}>
<div className="absolute bg-black h-full lg:h-screen w-full opacity-40 flex flex-col items-center justify-center"></div>
<div className="relative ">
<div className="flex-col h-screen">
<div className="flex flex-col items-center h-full justify-center">
<div className=" flex flex-col lg:max-w-6xl md:max-w-xl max-w-s px-10 h-3/5 md:h-2/5 xl:h-2/5 justify-start ">
<div className="text-white lg:text-lg pb-6 text-sm lg:text-center lg:font-normal flex flex-col justify-center lg:items-center "><h1 className="lg:pb-6 pb-2 text-lg lg:text-4xl"> About </h1> 
Our parent company Light and Shadow Projects, was started in the year 2011 as an interior contracting company and established as a construction contractor within a few years. By the year 2021 we have completed construction and handed over 70+ residential as well as commercial building projects in an around Thiruvananthapuram. 
Greenest Building and Business Pvt Ltd is managed by a core team of two Civil engineers and an Architect. Each having an experience of 10+ years in the field of design, construction and management in Kerala and abroad. .</div>

<div className="self-start lg:self-center">

</div>
<span className="text-white self-start lg:self-center lg:mt-4 lg:text-5xl text-4xl pt-8 font-thin animate-ping"> <IoIosArrowRoundDown /></span>
</div>
</div>


</div>
</div>

</div>


</section>
)
}
export default About
import Iframe from "react-iframe";

import Link from 'next/link';
import ContactModal2 from "../../components/ContactModal2";


export default function FooterandLocation() {
  const wrapper= {
    position: 'relative',
    overflow: 'hidden',
    paddingTop:'56.25%'
  }
  const iiframe={
    position: 'absolute',
    top:'0',
    left:'0',
    width:'100%',
    height:'100%'
  }
  const bg={
    backgroundImage:'url(/images/pond.jpg)',
    objectFit:'cover',
    paddingTop:'2rem'
  }
  const mapresponsive={
    overflow:'hidden',
    paddingBottom:'56.25%',
    position:'relative',
    height:'0'
}
const mapresponsiveiframe={
    left:0,
    top:0,
    height:'100%',
    width:'100%',
    position:'absolute'
}

  return (
    <>
    
      <section id="footer-location overflow-x-hidden"  >
      <div className="absolute  bg-black h-full  lg:h-screen w-full opacity-40 flex flex-col items-center justify-center"></div>
      <div className="  h-screen  flex-col  justify-start  flex sm:justify-center"  style={bg}>

        <div className="sm:mx-6  flex justify-center  items-start lg:items-center">
        <div>

          <div className="flex flex-col sm:flex-row  w-screen items-center justify-center  " >
          
            <div className="  bg-white bg-opacity-10 rounded-xl      shadow-14xl z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xs  w-96 mt-10 sm:mt-0 sm:mr-10 shadow-14xl relative z-2" ><h2 className="text-center  text-white p-2 lg:text-2xl"> Walk Through Video </h2>
            
            <div style={wrapper}>
            
            <iframe
             
              src="https://www.youtube.com/embed/tgbNymZ7vqY"  style={iiframe} 

            ></iframe>
            </div>
            </div>
            <div>
            <div className="bg-white bg-opacity-10  mt-2     shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xs rounded-xl"><h2 className="text-center  lg:text-2xl text-white p-2"> Project Location </h2>
            <div className='text-sm sm:text-2xl lg:text-2xl text-center text-white    '> Greenest buildings and business pvt ltd<br/>
Tc14/733, Nandavanam<br/>  Thiruvananthapuram</div>

            <div style={mapresponsive}>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9202803206713!2d76.95393381478293!3d8.507121493883881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMjUuNiJOIDc2wrA1NycyMi4wIkU!5e0!3m2!1sen!2sin!4v1630850939086!5m2!1sen!2sin"  width='100%' style={mapresponsiveiframe}
        
            ></Iframe>
    
            </div>
           
            </div>
            </div>
            <div className="absolute bottom-0 ">
        <ContactModal2/>
      </div>
          </div>
        </div>
    
   
        </div>
      
        </div>
     
           
      </section>

     
    </>
  );
}

import About from "./sections/About";
import Head from "next/head";
import Link from 'next/link'


import BuildQuality from "./sections/BuildQuality";
import ElegantResortLiving from "./sections/ElegantResortLiving";
import ReactFullpage from "@fullpage/react-fullpage";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

import Menuu from "../components/Menuu";


import ImprovedQualityOfSpace from "./sections/ImprovedQualitySpace";
import LowLivingCost from "./sections/LowLivingCost";
import DesignFeatures from "./sections/DesignFeatures";
import GoGreenPolicy from "./sections/GoGreenPolicy";
import SimpleSlider from "./sections/SimpleSlider";
import HomePageGreen from "./sections/Home";
import FooterPage from "./sections/FooterPage";
import MaterialSpecifications from "./sections/MaterialSpecifications";
import GreenPolicy from "./sections/GreenPolicy";
import Gallery from "./sections/Gallery/Gallery";
import Player from "components/sound";



export default function Home() {

  return (
    <>
      <Head>
        <title>Greenest ONE</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       
      </Head>
      <div className="absolute    z-10  pb-2 pt-4 w-full flex justify-center ">
        <img
          src="/logo.png"
          alt="Picture of the author"
          className="md:w-44 md:h-auto h-auto w-32"
        />
         
      </div>
      <div className="absolute pl-2 pr-2 pt-4 pb-2  lg:px-4 lg:pb-4 lg:pt-6 flex w-screen justify-between ">
        <div className="md:ml-4 ml-2  z-30  flex items-center "><a href=""><img src="/logoo.png" className=" md:w-8 w-7 h-auto   md:h-auto drop-shadow-2xl brightness-150 saturate-200 mr-2"/></a>    <div className="z-40"><Player/></div> </div>
      
  
        <div className="flex text-3xl mr-4  lg:text-5xl text-gray-200 ">
     
       <Menuu/>
          {/* <div className="hover:text-pink-800 hover:animate-ping">
          <AiOutlineInstagram />
          </div>
          <Link href="https://www.facebook.com/GreenestBuildings/">
          <a className="hover:text-blue-400 hover:animate-ping">
          <AiOutlineFacebook />
          </a>
          </Link> */}
        </div>
      </div>

      {/* <Navbar/> */}
      {/* <MainHome/>

   <About/>
    <Contact/>  */}

      {/* </div>  */}

      <ReactFullpage
        licenseKey="6E5201D5-E37447CD-AE1913F6-91AFE3AA"
        scrollSpeed={1000}
        navigation="true"
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              {/*
              

              <div className="section">
                <MainHome />
              </div>
              <div className="section">
                <ElegantResortLiving />
              </div>
              <div className="section">
               <ImprovedQualityOfSpace/>
              </div>
              <div className="section">
              <LowLivingCost/>
              </div>
              <div className="section">
              <DesignFeatures/>
              </div> */}
              <div className="section overflow-hidden">
           <SimpleSlider/>
              </div>
               <div className="section overflow-hidden">
               <HomePageGreen/>
              </div>
              
               <div className="section">
                <ElegantResortLiving />
              </div>
              <div className="section">
               <ImprovedQualityOfSpace/>
              </div>
              <div className="section">
              <LowLivingCost/>
              </div>
              <div className="section">
              <GreenPolicy/>
              </div>
             
           
            
          
              <div className="section">
        <MaterialSpecifications/>
              </div>

              <div className="section">
        <Gallery/>
              </div>
              
              <div className="section">
         <FooterPage/>
              </div>
          
{/*            
              <div className="section">
                <BuildQuality />
              </div>
              <div className="section">
                <GoGreenPolicy/>
              </div>
              <div className="section">
              <About/>
              </div>
             
              <div className="section">
              <FooterandLocation/>
              </div> */}
              
             
              
            
            </div>
             
          );
        }}
      />

      {/* } */}
    </>
  );
}

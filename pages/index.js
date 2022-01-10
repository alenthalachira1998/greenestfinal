import About from "./sections/About";
import MainHome from "./sections/MainHome";
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
import FooterandLocation from "./sections/FooterandLocation";
import DesignFeatures from "./sections/DesignFeatures";
import GoGreenPolicy from "./sections/GoGreenPolicy";
import SimpleSlider from "./sections/SimpleSlider";
import HomePageGreen from "./sections/Home";
import FooterPage from "./sections/FooterPage";
import MaterialSpecifications from "./sections/MaterialSpecifications";
import GreenPolicy from "./sections/GreenPolicy";
import Gallery from "./sections/Gallery";

export default function Home() {

  return (
    <>
      <Head>
        <title>Greenest ONE</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <div className="absolute   top-4 w-full flex justify-center z-10">
        <img
          src="/logo.png"
          alt="Picture of the author"
          className="md:w-44 md:h-14 h-10 w-32"
        />
         
      </div>
      <div className="absolute pl-2 pr-2 pb-2 pt-4 lg:px-4 lg:pb-4 lg:pt-6 flex w-screen justify-between ">
       <img src="/logoo.png" className="md:ml-4 ml-2  z-10 drop-shadow-2xl brightness-150 saturate-200 md:w-10 w-8 h-10  md:h-12"/>
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
               <div className="section">
               <HomePageGreen/>
              </div>
              <div className="section">
           <SimpleSlider/>
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

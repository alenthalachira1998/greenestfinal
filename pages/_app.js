 import Layout from '../components/Layout';
import '../styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../css/menu.css'
import '../css/overrides.css'
import '../css/textv.css'
import '../css/blog-center.scss'
import '../css/Arrow.css'
import '../css/height.css'
config.autoAddCss = false
import {useState, useEffect} from "react";




function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        },5000);
      })

  return (
    <>
    
    {isLoading==true? <div className="flex bg-gray-900 flex-col  h-screen w-screen relative items-center m-0 p-0 justify-center" > <img src="/logoo.png" className=" object-center  lg:h-20 h-12 w-12 lg:w-20 animate-pulse"/><img src="/logo.png" className=" object-center  mt-2 sm:mt-4 lg:mt-6 lg:h-auto lg:w-56 w-36 h-auto animate-pulse"/></div> : 
   
 <Layout><Component {...pageProps} /></Layout> 
     
 } 
   </>
  );
}

export default MyApp;



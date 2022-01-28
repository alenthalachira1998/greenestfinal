// // import React, { Component } from "react";
// // import { TweenMax, Power1 } from "gsap";
// // import Link from 'next/link'
// // class Menuu extends Component {
// //   state = {
// //     isVisible: false
// //   };
// //   constructor(props) {
// //     super(props);
// //     // create a ref to store the textInput DOM element
// //     this.myref = React.createRef();

// //   }

// //   handleMouseDown() {
// //     this.setState({ isVisible: !this.state.isVisible });
// //     if (this.state.isVisible) {
// //       TweenMax.to(current.myref.myElement, 0.5, {
// //         x: "-100vw",
// //         borderRadius: "0 0 100% 0",
// //         ease: Power1.easeOut
// //       });
// //     } else {
// //       TweenMax.to(this.current.myref.myElement, 0.1, {
// //         x: "0vw",
// //         borderRadius: "0",
// //         ease: Power1.easeIn
// //       });
// //       TweenMax.staggerFrom(
// //         this.current.myref.myElement.childNodes,
// //         0.5,
// //         { xPercent: -100 },
// //         0.1
// //       );
// //       TweenMax.staggerTo(this.current.myref.myElement.childNodes, 2.8, { x: 0 }, 0.7);
// //     }
// //   }
// //   render() {
// //     let v = this.state.isVisible ? "show" : "hide";
// //     return (
// //       <div>
// //         <div id="hambmenu" className={v} onClick={() => this.handleMouseDown()}>
// //           <span />
// //           <span />
// //           <span />
// //           <span />
// //         </div>

// //         <div
// //           myref={"myElement"}
// //           id="flyoutMenu"
// //           onClick={() => this.handleMouseDown()}
// //         >

// //           <Link href="/about">
// //           <h2>
// //             <a >Home</a>
// //           </h2>
// //         </Link> <Link href="/about">
// //         <h2>
// //             <a>About</a>
// //           </h2>
// //         </Link> <Link href="/about">
// //         <h2>
// //             <a >Projects</a>
// //           </h2>
// //         </Link> <Link href="/about">
// //         <h2>
// //             <a>Bog</a>
// //           </h2>
// //         </Link>
// //         <Link href="/about">
// //         <h2>
// //             <a>Contact</a>
// //           </h2>
// //         </Link>


// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Menuu;


import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Link from 'next/link'
import ContactModal from './ContactModal';

function Menuu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>


      <div className="z-20">
        <div className="nav-bar  relative">
          <div className='text-4xl text-gray-600  cursor-pointer'>
            <Link href='#' >
              <VscIcons.VscMenu onMouseOver={showSidebar}/>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active ' : '  nav-menu'} onMouseLeave={showSidebar}>
          <ul className='nav-menu-items  cursor-pointer'  onClick={showSidebar}>

            <li className='navbar-toggle ml-full text-gray-400 text-4xl'>

              <Link href='#' >

                <MdIcons.MdArrowBack />

              </Link>
              <div className='w-full flex  text-2xl'>
              <Link href="https://www.facebook.com/GreenestBuildings/">
                        <a className="hover:text-blue-400 mx-5 hover:animate-ping"><FaIcons.FaFacebookF /></a>
                    </Link>
                    <Link href="https://youtu.be/TjOALPVpDNo">
                                <a className="hover:text-pink-600 mr-5 hover:animate-ping"><AiIcons.AiFillYoutube /></a></Link>
                                <Link href="https://www.facebook.com/GreenestBuildings/">
                                <a className="hover:text-pink-600 mr-5 hover:animate-ping"><AiIcons.AiOutlineInstagram /></a></Link>
                                </div>

            </li>

            <li>
              <Link href="/">
                <span className="nav-text cursor-pointer">
                  <a >Home</a>
                </span>
              </Link> <Link href="/sections/About">
                <span className="nav-text  cursor-pointer">
                  <a>About &#38;  Blog</a>
                </span>
              </Link>
              <Link href="/Blogshome">
                <span className="nav-text  cursor-pointer">
                  <a>Project</a>
                </span>

              </Link>
              <span className="nav-textc  cursor-pointer">   <ContactModal />   </span></li>


          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menuu;
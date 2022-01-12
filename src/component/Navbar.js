import React, {useState} from "react";
import { useSpring, animated } from "react-spring";
import web from './images/website.svg';
import {animateScroll as scroll} from 'react-scroll';
import {Link} from 'react-scroll';


function Navbar() {
    const [b, setB] = useState(false);
    const fade = useSpring({
        opacity: b ? 1 : 0,
        transform: b ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)', 
        animationDelay: -6,      
    });

    const toggleHome =() =>{
        scroll.scrollToTop()
    }
    return (
        <div className="font-sans flex flex-col items-center">
            <header className="bg-primary-default w-full px-4 py-3 flex justify-around border-b-4 fixed z-50">
                <div className="w-full md:flex justify-between items-center">
                    <div className="flex justify-between items-center text-secondary-default">
                        <button type="button" onClick={() => setB(!b)} className="text-neon-default md:hidden hover:text-gray-400 focus:outline-none">
                            {b === false ? 
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                                :
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                            }
                        </button> 
                        <img src={web} alt="logo" className="w-9 h-9 ml-4" onClick={toggleHome}/>
                        <p className="font-extrabold ml-4 text-secondary-default hidden md:flex">Portfolio</p>

                        <div className="md:hidden text-primary-default flex px-2 py-2 bg-neon-default rounded-full items-center justify-center">
                            {/* <p className="text-white">Contact Me</p> */}
                            <a href="tel:7319032302">
                                <svg className="w-5 h-5 fill-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.397 32.326"><path d="M.966,3.611l3-2.991a2.124,2.124,0,0,1,3,0l4.5,5.982a2.25,2.25,0,0,1,0,2.991L9.627,11.423a51.664,51.664,0,0,0,4.834,5.646,60.216,60.216,0,0,0,6.474,5.508l1.775-1.768a2.262,2.262,0,0,1,3,0l6,4.486a1.968,1.968,0,0,1,0,2.991l-3,2.99c-1.657,1.653-3.811,1.123-6,0a63.987,63.987,0,0,1-12.289-9.358A70.662,70.662,0,0,1,.966,9.592c-.86-2.358-1.657-4.33,0-5.982" fill="#ade8f4"/></svg>
                            </a>
                            <a href="mailto:sambit.saha@iot.kiit.in">
                                <svg className="w-5 h-5 fill-content ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 28.01"><g transform="translate(-1662 -34.5)"><path d="M36.327,28.01h-35L15.062,14.194,19,17.4l3.841-3.23L36.325,28.008ZM.128,26.049v0h0A2.894,2.894,0,0,1,0,25.238V2.119L13.238,12.747.129,26.048Zm37.744,0h0L24.807,12.7,38,2.172V25.238a2.906,2.906,0,0,1-.127.808ZM19,14.021h0L1.187,0H36.812L19,14.02Z" transform="translate(1662 34.5)" fill="#ade8f4"/></g></svg>
                            </a>
                        </div>                                              
                    </div>                     
                    <div className="hidden md:inline-flex md:flex-row">
                        <Link to="home" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                            <span>HOME</span>
                        </Link>
                        <Link to="project" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                            <span>PROJECT</span>
                        </Link>
                        <Link to="work" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                            <span>WORK EXPERIENCE</span>
                        </Link>
                        <Link to="blog" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                            <span>BLOG</span>
                        </Link>                       
                    </div>
                    <div className="hidden text-primary-default md:flex w-40 text-sm px-4 py-2 bg-neon-default rounded-full items-center justify-center">
                        <p className="text-white">Contact Me</p>
                        <a href="tel:7319032302">
                            <svg className="w-5 h-5 fill-content ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.397 32.326"><path d="M.966,3.611l3-2.991a2.124,2.124,0,0,1,3,0l4.5,5.982a2.25,2.25,0,0,1,0,2.991L9.627,11.423a51.664,51.664,0,0,0,4.834,5.646,60.216,60.216,0,0,0,6.474,5.508l1.775-1.768a2.262,2.262,0,0,1,3,0l6,4.486a1.968,1.968,0,0,1,0,2.991l-3,2.99c-1.657,1.653-3.811,1.123-6,0a63.987,63.987,0,0,1-12.289-9.358A70.662,70.662,0,0,1,.966,9.592c-.86-2.358-1.657-4.33,0-5.982" fill="#ade8f4"/></svg>
                        </a>
                        <a href="mailto:sambit.saha@iot.kiit.in">
                            <svg className="w-5 h-5 fill-content ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 28.01"><g transform="translate(-1662 -34.5)"><path d="M36.327,28.01h-35L15.062,14.194,19,17.4l3.841-3.23L36.325,28.008ZM.128,26.049v0h0A2.894,2.894,0,0,1,0,25.238V2.119L13.238,12.747.129,26.048Zm37.744,0h0L24.807,12.7,38,2.172V25.238a2.906,2.906,0,0,1-.127.808ZM19,14.021h0L1.187,0H36.812L19,14.02Z" transform="translate(1662 34.5)" fill="#ade8f4"/></g></svg>
                        </a>    
                    </div>    
                </div>                                   
            </header>
            <animated.div style={fade} className="fixed top-16 w-full h-full bg-primary-default flex flex-col justify-center items-center md:hidden z-50">
                <Link to="home" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' onClick={() => setB(!b)} className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                    <span>HOME</span>
                </Link>
                <Link to="project" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' onClick={() => setB(!b)} className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                    <span>PROJECT</span>
                </Link>
                <Link to="work" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' onClick={() => setB(!b)} className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                    <span>WORK EXPERIENCE</span>
                </Link>
                <Link to="blog" activeClass="bg-neon-default text-white" smooth={true} duration={500} spy={true} exact='true' onClick={() => setB(!b)} className="ml-2 px-3 py-1 rounded text-secondary-default font-bold hover:text-white hover:bg-neon-default cursor-pointer">
                    <span>BLOG</span>
                </Link>
            </animated.div>
        </div>
    )
}

export default Navbar

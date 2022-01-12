import React from 'react';
import man from '../images/man.svg';

function Header() {
    return (
        <div className="mt-20" id="home">
            <div className="grid md:grid-flow-row grid-flow-col md:grid-cols-2 ">
                <div className="hidden md:flex w-full pt-20">
                    <svg className="w-8/12 lg:ml-6 ml-3 animate-wiggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 688.976 571.861"><defs><filter id="a" x="0" y="0" width="688.976" height="571.861" filterUnits="userSpaceOnUse"><feOffset dx="5" dy="5" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#a)"><path d="M67.651,192.987C108.819,111.977,208.2,1.6,318.537,4.657c49.213,1.362,53.776,23.994,119.006,28.175C543.2,39.6,588.73-16.089,631.53,4.657c44.547,21.592,53.429,110.137,8.255,162.389-47.652,55.119-133.54,44.51-141.707,83.461-6.2,29.579,36.773,66.956,79.8,80.077,46.952,14.32,74.063-6.317,97.682,7.895C712.248,360.559,709.7,448.2,657.67,499.762,552,604.48,269.279,533.554,145.874,483.972c-31.228-12.547-56.957-25.616-78.223-48.5C-12.017,349.757,55.361,217.172,67.651,192.987Z" transform="translate(-25.35 4)" fill="#3abcda"/></g></svg>
                    <img src={man} alt="animation" className="w-4/12 absolute lg:left-36 md:left-28"/>
                </div>  
                <div className="flex w-full text-white  pt-24 md:pt-40 ">
                    <div className="w-full ml-28 md:ml-3 z-20">
                        <p className="text-secondary-default md:text-lg font-bold tracking-wider"> Hi! I am <span className="bg-neon-default text-primary-default rounded-full px-3">Sambit Saha</span></p>
                        <p className="text-secondary-default text-3xl md:text-5xl font-extrabold"> Web Developer</p>
                        <button className=" px-2 py-1 text-sm md:px-4 md:py-2 md:bg-primary-default bg-neon-default text-secondary-default hover:bg-secondary-default hover:text-white font-bold mt-4">Download CV</button>                    
                    </div>
                    <div className="z-0 w">
                        <div className=" bg-primary-default w-40 lg:w-56 h-40 lg:h-56 absolute rounded-full top-40 right-40 z-0"></div>
                        <svg className="absolute animate-spin-slow right-40 lg:right-80 top-64 md:top-80 w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 96"><g transform="translate(-1472 -447)"><circle cx="6" cy="6" r="6" transform="translate(1472 447)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1500 447)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1528 447)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1528 447)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1556 447)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1584 447)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1584 475)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1556 475)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1528 475)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1500 475)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1472 475)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1472 503)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1500 503)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1528 503)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1556 503)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1584 503)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1584 531)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1556 531)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1528 531)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1500 531)" fill="#023e8a"/><circle cx="6" cy="6" r="6" transform="translate(1472 531)" fill="#023e8a"/></g></svg>
                    </div>                  
                </div>                            
            </div>
            <div>
                <div className="md:hidden flex w-full pt-20 justify-center">
                    <svg className="w-6/12 -ml-8 animate-wiggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 688.976 571.861"><defs><filter id="a" x="0" y="0" width="688.976" height="571.861" filterUnits="userSpaceOnUse"><feOffset dx="5" dy="5" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#a)"><path d="M67.651,192.987C108.819,111.977,208.2,1.6,318.537,4.657c49.213,1.362,53.776,23.994,119.006,28.175C543.2,39.6,588.73-16.089,631.53,4.657c44.547,21.592,53.429,110.137,8.255,162.389-47.652,55.119-133.54,44.51-141.707,83.461-6.2,29.579,36.773,66.956,79.8,80.077,46.952,14.32,74.063-6.317,97.682,7.895C712.248,360.559,709.7,448.2,657.67,499.762,552,604.48,269.279,533.554,145.874,483.972c-31.228-12.547-56.957-25.616-78.223-48.5C-12.017,349.757,55.361,217.172,67.651,192.987Z" transform="translate(-25.35 4)" fill="#3abcda"/></g></svg>
                    <img src={man} alt="animation" className="w-6/12 absolute lg:left-36 md:left-28"/>
                </div> 
            </div>
        </div>
    )
}

export default Header

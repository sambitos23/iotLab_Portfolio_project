import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper/core';
import 'swiper/swiper-bundle.css';
import WorkspaceComp from './WorkspaceComp';


SwiperCore.use([Navigation]);

function Workspace() {
    const [b] = useState([
        {
            id: 1,
            imageUrl: 'https://avatars.dicebear.com/api/gridy/.svg',
            desc: 'Sambit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto',
            link: '',            
        },
        {
            id: 2,
            imageUrl: 'https://avatars.dicebear.com/api/avataaars/cc.svg',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
            link: '',            
        },
        {
            id: 3,
            imageUrl: 'https://avatars.dicebear.com/api/bottts/.svg',
            desc: 'Saha Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
            link: '',            
        },
    ])
    // const prevRef = React.useRef(null);
    // const nextRef = React.useRef(null);
    return (
        <div className="z-20" id="work">
            <div className=" hidden md:flex absolute w-6/12 h-96 lg:h-full bg-neon-default z-0 opacity-20" style={{clipPath: "polygon(81% 0, 78% 100%, 0 78%, 0 56%)"}}></div>
            <div className="mt-10 z-20">
                <p className="text-center font-extrabold text-secondary-default text-xl md:text-4xl pt-20">Work Experience</p>
                <div className="w-full">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        navigation
                        // onInit={(swiper) => {
                        //     swiper.params.navigation.prevEl = prevRef.current;
                        //     swiper.params.navigation.nextEl = nextRef.current;
                        //     swiper.navigation.init();
                        //     swiper.navigation.update();
                        //   }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="md:w-8/12 text-secondary-default"
                    >
                        {
                            b.map(({id, ...otherprops}) =>(
                                <SwiperSlide>
                                    <WorkspaceComp key={id} {...otherprops} />
                                </SwiperSlide>
                            ))
                        }
                        {/* <div ref={prevRef}>Prev</div>
                        <div ref={nextRef}>Next</div> */}
                    </Swiper>                
                </div>
            </div>
        </div>
    )
}

export default Workspace

import React from 'react'

function WorkspaceComp(props) {
    return (
        <div className=" flex w-8/12 h-full m-auto mt-12 bg-primary-default rounded-lg shadow-lg">
            <div>
                <img src={props.imageUrl} alt="experience" className="w-12 h-12 rounded-full bg-white mt-24 ml-10 mr-2 hidden md:flex" />
            </div>
            <div className="justify-center">
                <p className=' text-sm p-12'>
                    {props.desc}<br/><br/>
                    <a href={props.link} className="bg-secondary-default text-white px-4 py-2 rounded-lg">View Certificates</a>
                </p>                
            </div>
        </div>
    )
}

export default WorkspaceComp


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation} from 'swiper/core';
// // import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
// import 'swiper/swiper-bundle.css';

// // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// SwiperCore.use([Navigation]);

// function WorkspaceComp(props) {
//     return (
//         <Swiper
//             spaceBetween={50}
//             slidesPerView={1}
//             loop
//             navigation
//             // pagination={{ clickable: true }}
//             // scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//             className="w-6/12 h-40"
//         >
//             <SwiperSlide>{props.desc}</SwiperSlide>
//             {/* <SwiperSlide>Slide 2</SwiperSlide>
//             <SwiperSlide>Slide 3</SwiperSlide>
//             <SwiperSlide>Slide 4</SwiperSlide> */}
//         </Swiper>
//     )
// }

// export default WorkspaceComp
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination} from 'swiper/core';
import 'swiper/swiper-bundle.css';
import BlogComp from './BlogComp';


SwiperCore.use([Pagination]);

function Blog() {
    const [b, setB] = useState([
        {
            id: 1,
            imageUrl: 'https://source.unsplash.com/user/erondu/1600x900',
            titel: 'Sambit Lorem ipsum dolor sit amet',
            date:'11-12-2021',
            link: '',            
        },
        {
            id: 2,
            imageUrl: 'https://source.unsplash.com/user/tobbes_rd/1600x900',
            titel: 'Lorem ipsum dolor sit amet',
            date:'11-12-2021',
            link: '',            
        },
        {
            id: 3,
            imageUrl: 'https://source.unsplash.com/collection/190727/1600x900',
            titel: 'Saha Lorem ipsum dolor sit amet',
            date:'11-12-2021',
            link: '',            
        },
    ])
    return (
        <div id="blog">
            <p className="text-center font-extrabold text-secondary text-xl md:text-4xl pt-28">Blogs</p>
            <div className="w-full">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="w-8/12 text-secondary"
                >
                    {
                        b.map(({id, ...otherprops}) =>(
                            <SwiperSlide>
                                <BlogComp key={id} {...otherprops} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>                
            </div>
        </div>
    )
}

export default Blog

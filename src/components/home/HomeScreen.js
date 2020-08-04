import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export const HomeScreen = () => {
    return (
        <Swiper
            id="main"
            // spaceBetween={50}
            // slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            style={{width:"100%"}}
        >
            <SwiperSlide style={{textAlign:"center"}}>
                <img src={require('../../assets/images/banner-1.jpg')} height="300" alt="imagne1"/>
            </SwiperSlide>
            <SwiperSlide style={{textAlign:"center"}}>
                <img src={require('../../assets/images/banner-2.jpg')} height="300" alt="imagne2"/>
            </SwiperSlide>
            <SwiperSlide style={{textAlign:"center"}}>
                <img src={require('../../assets/images/banner-3.jpg')} height="300" alt="imagne3"/>
            </SwiperSlide>
        </Swiper>
    )
}

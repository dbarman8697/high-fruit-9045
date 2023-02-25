import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";

// import required modules
import { Navigation } from "swiper";

export default function FourMore() {
    return (
        <>
            <div className="textSlide">
                <p>
                    EXPLORE
                </p>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                // pagination={{
                //   clickable: true,
                // }}

                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{ height: "400px" }}
            >
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/18/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/20/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/20/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/20/3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/20/4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/18/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/18/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/18/3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/18/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/17/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/17/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/17/3.jpg" alt="" /></SwiperSlide>


                <SwiperSlide><img src="https://dummyjson.com/image/i/products/16/1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/16/2.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/16/3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://dummyjson.com/image/i/products/16/thumbnail.jpg" alt="" /></SwiperSlide>


            </Swiper>

            <div className="read">
                <div className="textSlide">
                    <p>
                        READ MORE ABOUT SUGAR COSMETICS
                    </p>
                </div>

            </div>
        </>
    );
}


























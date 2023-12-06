import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TopBar from './TopBar';

const Hero = () => {
    const handleSlideInit = (swiper) => {
        swiper.slides.forEach((slide, index) => {
            slide.classList.add(index % 2 === 0 ? 'even-slide' : 'odd-slide');
        });
    };

    return (
        <section>
            <TopBar />
            <div className="container px-10" id="hero">
                <div>
                    <Swiper
                        autoHeight={true}
                        slidesPerView={2}
                        draggable={true}
                        spaceBetween={30}
                        className="mySwiper"
                        onInit={handleSlideInit}
                    >
                        <SwiperSlide className={`text-black rounded-[40px] overflow-hidden even-slide`}>
                            <div className="w-full min-h-[500px] bg-white">hello</div>
                        </SwiperSlide>
                        <SwiperSlide className={`text-black rounded-[40px] overflow-hidden odd-slide`}>
                            <div className="w-full min-h-[500px] bg-white">hello</div>
                        </SwiperSlide>
                        <SwiperSlide className={`text-black rounded-[40px] overflow-hidden even-slide`}>
                            <div className="w-full min-h-[500px] bg-white">hello</div>
                        </SwiperSlide>
                        <SwiperSlide className={`text-black rounded-[40px] overflow-hidden odd-slide`}>
                            <div className="w-full min-h-[500px] bg-white">hello</div>
                        </SwiperSlide>
                        <SwiperSlide className={`text-black rounded-[40px] overflow-hidden even-slide`}>
                            <div className="w-full min-h-[500px] bg-white">hello</div>
                        </SwiperSlide>
                        <SwiperSlide className={`text-black rounded-[40px] overflow-hidden odd-slide`}>
                            <div className="w-full min-h-[500px] bg-white">hello</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hero;

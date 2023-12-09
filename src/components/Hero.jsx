import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TopBar from './TopBar';
import Image from 'next/image';

const Hero = () => {
    const handleSlideInit = (swiper) => {
        swiper.slides.forEach((slide, index) => {
            slide.classList.add(index % 2 === 0 ? 'even-slide' : 'odd-slide');
        });
    };

    // Generate a random seed for each slide to get different war/apocalypse-related images
    const getRandomSeed = () => Math.floor(Math.random() * 1000);

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
                        {[...Array(6)].map((_, index) => (
                            <SwiperSlide key={index} className={`text-black rounded-[40px] overflow-hidden ${index % 2 === 0 ? 'even-slide' : 'odd-slide'}`}>
                                <div className="w-full min-h-[500px] bg-white">
                                    <Image layout="fill" alt="hero-random-img" src={`https://picsum.photos/seed/${getRandomSeed()}/300/200`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hero;

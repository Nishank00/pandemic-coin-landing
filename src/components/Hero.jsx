import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TopBar from './TopBar';
import Image from 'next/image';

const Hero = () => {
    const image = [
        "/assets/image1.jpg",
        "/assets/image2.jpg",
        "/assets/image3.jpg",
        "/assets/image4.jpg",
        "/assets/image5.jpg"
    ]


    return (
        <section>
            <TopBar />
            <div className="container px-10" id="hero">
                <div>
                    <Swiper
                        autoHeight={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                        }}
                        draggable={true}
                        spaceBetween={30}
                        className="mySwiper"
                    >
                        {image.map((item, index) => (
                            <SwiperSlide key={index} className={`text-black rounded-[40px] overflow-hidden`}>
                                <div className="w-full min-h-[500px] bg-white">
                                    <Image layout="fill" className='object-cover object-top' alt="hero-random-img" src={`${item}`} />
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

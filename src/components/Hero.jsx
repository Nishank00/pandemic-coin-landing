import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TopBar from './TopBar';
import Image from 'next/image';
import CountDown from './CountDown';

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
            <div className="container mx-auto mb-10" id="hero">
                <div className='overflow-hidden'>
                    <Swiper
                        autoHeight={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                        }}
                        spaceBetween={30}
                        draggable={true}
                        className="mySwiper overflow-hidden"
                    >
                        {image.map((item, index) => (
                            <SwiperSlide key={index} className={`text-white overflow-hidden`}>
                                <div className="w-full h-[80vh] relative overflow-hidden bg-white">
                                    <Image layout="fill" className='overflow-hidden object-cover object-top brightness-75' alt="hero-random-img" src={`${item}`} />
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-8 justify-end text-center">
                                        <h1 className='uppercase text-[60px]'>The pandemic coin </h1>
                                        <button className="rounded-md text-white bg-[#FB2525] px-8 py-3 text-[15px] my-6 font-medium hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                            Invest
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <CountDown />
        </section>
    );
};

export default Hero;

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Webinar.module.css'

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Webinar = () => {
    const events = [
        {
            imageUrl: 'https://dummyimage.com/600x360',
            subtitle: 'Upcoming Events',
            title: 'Shooting Stars',
            dayOfEvent: "New Year Eve - 8pm",
            typeOfEvent: "black & white events",
            location: "park wolf club"
        },
        {
            imageUrl: 'https://dummyimage.com/600x360',
            subtitle: 'Upcoming',
            title: 'Word of Mouth',
            dayOfEvent: "New Year Eve - 8pm",
            typeOfEvent: "black & white events",
            location: "park wolf club"
        },
        {
            imageUrl: 'https://dummyimage.com/600x360',
            subtitle: 'Upcoming',
            title: 'The 400 Blows',
            dayOfEvent: "New Year Eve - 8pm",
            typeOfEvent: "black & white events",
            location: "park wolf club"
        },
        {
            imageUrl: 'https://dummyimage.com/600x360',
            subtitle: 'Upcoming',
            title: 'Neptune',
            dayOfEvent: "New Year Eve - 8pm",
            typeOfEvent: "black & white events",
            location: "park wolf club"
        },
        {
            imageUrl: 'https://dummyimage.com/600x360',
            subtitle: 'Upcoming',
            title: 'Holden Caulfield',
            dayOfEvent: "New Year Eve - 8pm",
            typeOfEvent: "black & white events",
            location: "park wolf club"
        },
        {
            imageUrl: 'https://dummyimage.com/600x360',
            subtitle: 'Upcoming',
            title: 'Alper Kamu',
            dayOfEvent: "New Year Eve - 8pm",
            typeOfEvent: "black & white events",
            location: "park wolf club"
        },
    ];

    const handleSlideChange = (swiper) => {
        const slides = swiper.slides;
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        const activeIndex = swiper.activeIndex;
        slides[activeIndex].classList.add('active');
    };

    return (
        <section className="relative body-font" id='eventBg'>
            <div className="container px-[5%] py-12 pt-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl md:text-5xl font-medium title-font mb-4 text-white">LIVE EVENTS</h1>
                    <div className="border-b mt-3 mb-6 border-slate-700 w-[20%] mx-auto" />
                    <p className="mt-6 text-sm tracking-[10px]">WEBINARS</p>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={4}
                    coverflowEffect={{
                        rotate: 5,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper gap-4"
                    on={{ slideChange: handleSlideChange }}
                >
                    {events.map((event, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <div className="flex relative" id="event-card">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center transition-all" src={event.imageUrl} />
                                <div className="px-8 py-10 relative z-10 w-full flex items-center justify-center flex-col bg-[#fff] text-[#6C6C6C]" id='event-desc'>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-[#121212] mb-4">{event.subtitle}</h2>
                                    <h1 className="title-font text-lg font-medium mb-3 text-[#1761B0]">{event.title}</h1>
                                    <p className="leading-relaxed text-xs mb-2">{event.dayOfEvent}</p>
                                    <p className="leading-relaxed text-xs mb-2">{event.typeOfEvent}</p>
                                    <p className="leading-relaxed text-xs mb-2">{event.location}</p>
                                </div>
                                <div className="bg-blue-400 w-[65px] h-[65px] absolute top-[-10%] right-[-10%] rounded-full z-50" id='circle'>
                                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] text-white text-center text-xs -translate-y-[50%]">
                                        31 dec
                                    </div>
                                </div>
                                <button className='bg-[#FB2525] text-white absolute left-[50%] -translate-x-[50%] -bottom-4 z-10 px-5 py-2'>Show More</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Webinar;

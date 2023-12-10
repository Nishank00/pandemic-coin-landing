import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

import './Webinar.module.css';

const Webinar = () => {
    const events = [{
        imageUrl: '/assets/event1.jpg',
        subtitle: 'Upcoming Events',
        title: 'Event Title',
        dayOfEvent: "Event Date - Time",
        typeOfEvent: "Event Type",
        location: "Event Location"
    }, {
        imageUrl: '/assets/event2.jpg',
        subtitle: 'Upcoming Events',
        title: 'Event Title',
        dayOfEvent: "Event Date - Time",
        typeOfEvent: "Event Type",
        location: "Event Location"
    }, {
        imageUrl: '/assets/event3.jpg',
        subtitle: 'Upcoming Events',
        title: 'Event Title',
        dayOfEvent: "Event Date - Time",
        typeOfEvent: "Event Type",
        location: "Event Location"
    },
    {
        imageUrl: '/assets/event4.webp',
        subtitle: 'Upcoming Events',
        title: 'Event Title',
        dayOfEvent: "Event Date - Time",
        typeOfEvent: "Event Type",
        location: "Event Location"
    }, {
        imageUrl: '/assets/event5.jpg',
        subtitle: 'Upcoming Events',
        title: 'Event Title',
        dayOfEvent: "Event Date - Time",
        typeOfEvent: "Event Type",
        location: "Event Location"
    }];

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
                    slidesPerView={1}
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
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1000: {
                            slidesPerView:2,
                            spaceBetween: 20,
                        },
                    }}
                    on={{ slideChange: handleSlideChange }}
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex relative" id="event-card">
                                <div className="absolute inset-0 w-full h-full object-cover object-center transition-all">
                                    <Image width={600} height={360} alt="gallery" src={event.imageUrl} />
                                </div>
                                <div className="px-8 py-10 relative z-10 w-full flex items-center justify-center flex-col bg-[#fff] text-[#464646]" id='event-desc'>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-[#121212] mb-4">{event.subtitle}</h2>
                                    <h1 className="title-font text-lg font-medium mb-3 text-[#1761B0]">{event.title}</h1>
                                    <p className="leading-relaxed text-xs mb-2">{event.dayOfEvent}</p>
                                    <p className="leading-relaxed text-xs mb-2">{event.typeOfEvent}</p>
                                    <p className="leading-relaxed text-xs mb-2">{event.location}</p>
                                </div>
                                <div className="bg-blue-400 w-[65px] h-[65px] absolute top-[-10%] right-[0%] md:right-[-10%] rounded-full z-50" id='circle'>
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

'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const shelters = [
    {
        imageUrl: '/assets/shelter1.jpg',
        description: 'Shelter 1',
    },
    {
        imageUrl: '/assets/shelter2.jpg',
        description: 'Shelter 2',
    },
    {
        imageUrl: '/assets/shelter3.jpg',
        description: 'Shelter 3',
    },
    {
        imageUrl: '/assets/shelter4.jpg',
        description: 'Shelter 4',
    },
];

const Shelters = () => {
    const calculateBulletWidth = () => {
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');
        const numSlides = shelters.length;
        const bulletWidth = 100 / numSlides;
        bullets.forEach((bullet) => {
            bullet.style.width = `${bulletWidth}%`;
        });
    };

    useEffect(() => {
        calculateBulletWidth();
        window.addEventListener('resize', calculateBulletWidth);
        return () => {
            window.removeEventListener('resize', calculateBulletWidth);
        };
    }, []);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="flex items-end w-4 h-2 bg-white    ' + className + '">' + '</span>';
        },
    };

    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <div className="w-fit mx-auto mb-2 md:-mb-20 text-center">
                    <h1 className="text-[40px] leading-[140px] md:text-[120px] text-[#201E41] text-center tracking-widest uppercase">
                        Pandemic shelters
                    </h1>
                </div>
                <div className="flex flex-wrap z-0" id="shelters">
                    <Swiper
                        centeredSlides={true}
                        initialSlide={2}
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={pagination}
                        onInit={() => calculateBulletWidth()}
                        onSlideChange={() => calculateBulletWidth()}
                        className="mySwiper gap-4"
                        modules={[Pagination, Navigation]}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}

                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1000: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {shelters.map((shelter, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-3 gap-4 w-10/12 mx-auto">
                                    <div className="">
                                        <div className="text-sm h-[80px] mb-2">{shelter.description}</div>
                                        <div className="pt-4">
                                            <Image width={400} height={440} src={shelter.imageUrl} alt={shelter.description} />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden relative">
                                        <Image layout="fill" className="w-full h-full object-cover" src={shelter.imageUrl} alt={shelter.description} />
                                    </div>
                                    <div>
                                        <div className="overflow-hidden">
                                            <Image width={400} height={450} src={shelter.imageUrl} alt={shelter.description} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div>
                            <div className="flex items-center justify-end space-x-4 z-[500] absolute bottom-[4.5%] right-[4.5%]">
                                <div className="prev z-50">
                                    <FaChevronLeft />
                                </div>
                                <div className="next z-50">
                                    <FaChevronRight />
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Shelters;

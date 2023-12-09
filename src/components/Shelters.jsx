import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const Shelters = () => {
    const getRandomSeed = () => Math.floor(Math.random() * 1000);

    const shelters = Array.from({ length: 9 }, (_, index) => ({
        imageUrl: `https://picsum.photos/seed/shelter${getRandomSeed()}/720/400`,
        description: 'Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons'
    }));

    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <div className="w-fit mx-auto -mb-20 text-center">
                    <h1 className="text-[120px] text-[#201E41] text-center tracking-widest uppercase">Pandemic shelters</h1>
                </div>
                <div className="flex flex-wrap" id='shelters'>
                    <Swiper
                        centeredSlides={true}
                        initialSlide={2}
                        slidesPerView={2}
                        spaceBetween={0}
                        pagination={false}
                        className="mySwiper gap-4"
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}
                    >
                        {shelters.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-4">
                                    <div className="h-full mx-auto shadow-2xl rounded-3xl overflow-hidden">
                                        <Image width={720} height={400} className="h-[400px] w-full object-cover object-center" src={testimonial.imageUrl} alt="blog" />
                                    </div>
                                </div>
                                <div className="py-6 w-full" id='desc'>
                                    <p className="leading-relaxed mb-3">{testimonial.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className='flex items-center justify-end space-x-4' id='shelter-nav'>
                            <div className="prev">
                                <FaChevronLeft />
                            </div>
                            <div className="next">
                                <FaChevronRight /></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Shelters;

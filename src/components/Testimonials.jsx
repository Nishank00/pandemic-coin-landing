import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

const TestimonialCard = ({ imageUrl, description }) => (
    <div className="p-4">
        <div className="h-full mx-auto overflow-hidden">
            <Image width={720} height={400} className="h-[400px] w-full object-cover object-center" src={imageUrl} alt="blog" />
            <div className="py-6">
                <p className="leading-relaxed mb-3">{description}</p>
                <button className="text-white bg-[#FB2525] px-4 text-sm font-medium py-1">Learn More</button>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const getRandomSeed = () => Math.floor(Math.random() * 1000);

    const testimonials = Array.from({ length: 9 }, (_, index) => ({
        imageUrl: `https://picsum.photos/seed/${getRandomSeed()}/720/400`,
        description: `Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons`
    }));

    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="w-fit mx-auto my-16 text-center">
                    <h1 className="text-3xl md:text-5xl text-center">Personal stories</h1>
                    <div className="border-b mt-3 mb-6 border-slate-700 w-full" />
                    <p className="mt-6 text-sm tracking-[10px]">TESTIMONIALS</p>
                </div>
                <div className="flex flex-wrap" id="testimonials">
                    <Swiper
                        centeredSlides={true}
                        initialSlide={3}
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={false}
                        className="mySwiper gap-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard key={index} {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

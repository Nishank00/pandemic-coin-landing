import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const NewCard = ({ imageUrl, description }) => (
    <div className="p-4 rounded-lg relative bg-transparent">
        <div className="h-full mx-auto overflow-hidden rounded-t-[20px] md:rounded-t-[20px]">
            <Image width={720} height={600} className="md:h-[400px] w-full object-cover object-center" src={imageUrl} alt="blog" />
            <div className="p-6 rounded-b-[20px] md:mx-4 md:absolute md:bottom-2 md:left-0 bg-[#1A1A23CC]">
                <p className="leading-relaxed mb-3">{description}</p>
                <button className="text-white bg-[#FB2525] px-4 mb-4 text-sm font-medium py-1">Learn More
                </button>
            </div>
        </div>
    </div>
);

const NewsGallery = () => {
    const NewsGallery = [
        { imageUrl: '/assets/news1.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news2.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news3.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news4.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news1.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news2.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news3.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news4.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
        { imageUrl: '/assets/news1.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons' },
    ];

    return (
        <section className="text-gray-400 body-font" id='news-gallery'>
            <div className="container px-5 py-16 md:py-24 mx-auto">
                <div className="w-fit mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl text-center">News Gallery</h1>
                    <div className="border-b mt-3 mb-6 border-slate-700  w-full" />
                    <p className="mt-6 text-sm tracking-[10px]">WEBINARS</p>
                </div>
                <div className="flex flex-wrap" id='NewsGallery'>
                    <Swiper
                        centeredSlides={true}
                        slidesPerView={1}
                        initialSlide={2}
                        loop={true}
                        spaceBetween={30}
                        pagination={false}
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
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper gap-4"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {NewsGallery.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <NewCard key={index} {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default NewsGallery;

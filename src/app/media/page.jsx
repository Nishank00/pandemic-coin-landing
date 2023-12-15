import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';
import VideoCard from '../components/media/VideoCard';
import bg from '../../assets/bg.png';

const VideoList = () => {
    return (
        <div className="space-y-4">
            <div class=" bg-[#111327] flex items-center rounded-[20px] shadow-2xl md:mb-6" id='list'>
                <div class="rounded-[20px] w-1/2 relative overflow-hidden">
                    <Image alt="team" width={300} height={300} className="rounded-[20px] w-[110px] h-[110px] object-cover object-center mb-0" src={bg} />
                </div>
                <div className='px-3 md:p-2 w-full p-0'>
                    <p class="text-md font-semibold title-font text-white">Shooting Stars</p>
                    <h2 class="text-xs md:text-sm leading-relaxed text-[#5F5F5F]">Swag shoindxgoitch literally meditation. Swag shoindxgoitch literally meditation. </h2>
                    <span className="inline-flex">
                        <a className="text-xs text-[#1761B0]">
                            Watch Now
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

const VideoPlayer = ({ videoData }) => {
    return (
        <div className="relative rounded-lg overflow-hidden mb-5">
            <Image src={bg} alt="Video thumbnail" className='rounded-[30px]' width={1920} height={1080} />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white bg-[rgba(0,0,0,0.6)] rounded-full p-4">
                    <FaPlay className="text-3xl" />
                </div>
            </div>
            <div className="absolute inset-0 p-6 flex flex-col items-start justify-end">
                <p className="text-white text-2xl font-semibold mb-2">{videoData.title}</p>
                <p className="text-white">{/* Video description goes here */}</p>
            </div>
        </div>
    );
};

const Media = () => {
    const videoData = {
        id: 1,
        title: 'Sample Video',
        // url: 'https://www.youtube.com/embed/9xwazD5SyVg?si=fdX2_IyjECI9XLp_',
        url: '',
    };

    const videoList = [
        { id: 1, title: 'Video 1' },
        { id: 2, title: 'Video 2' },
        { id: 3, title: 'Video 3' },
        { id: 4, title: 'Video 1' },
        { id: 5, title: 'Video 2' },
        { id: 6, title: 'Video 3' },
        // Add more videos as needed
    ];

    return (
        <section className="p-4 md:p-8 mx-auto bg-pdc-d-gray overflow-hidden relative">
            <div className="absolute w-[700px] h-[700px] blur-[100px] bg-gradient-to-tr from-[#FF071720] to-[#342CB220] rounded-full right-[-5%] z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 relative z-10 py-12 md:py-4 gap-1 md:gap-5">
                <div className="absolute w-[700px] h-[700px] blur-[200px] bg-pdc-blue rounded-full top-[50%] left-[-20%] z-0"></div>
                <div className='col-span-8 relative z-10'>
                    <VideoPlayer videoData={videoData} />
                    <div className='py-4'>
                        <h3 className='text-xl mb-4 uppercase'>Today&apos;s Live</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                    </div>
                    <div className='py-4'>
                        <h3 className='text-xl mb-4 uppercase'>Latest Blogs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                    </div>
                </div>
                <div className="col-span-4 relative z-10 md:pl-5 md:border-l space-y-8 md:space-y-4 ">
                    <div className='mb-4'>
                        <p className="text-lg bg-white p-3 text-black rounded-[10px] px-5 font-semibold mb-4">Recommended</p>
                        <div className="space-y-4">
                            {videoList.slice(0, 3).map((video, index) => (
                                <VideoList key={index} />
                            ))}
                        </div>
                    </div>
                    <div className='my-4'>
                        <p className="text-lg bg-white p-3 text-black rounded-[10px] px-5 font-semibold mb-4">Recommended</p>
                        <div className="space-y-4">
                            {videoList.map((video, index) => (
                                <VideoList key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Media;

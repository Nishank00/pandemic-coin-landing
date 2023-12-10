import React from 'react';
import VideoCard from '../../components/VideoCard';
import Image from 'next/image';
import Layout from '../../components/Layout';

const VideoList = () => {
    // Dummy data for the list of videos
    const videoList = [
        { id: 1, title: 'Video 1' },
        { id: 2, title: 'Video 2' },
        { id: 3, title: 'Video 3' },
        // Add more videos as needed
    ];

    return (
        <div className='my-5'>
            <div className="bg-transparent md:bg-[#3A3A3A] p-3">
                <h2 className='text-2xl mb-4'>Top News</h2>
            </div>
            <ul className=' space-y-0 md:space-y-6'>
                {videoList.map(video => (
                    <li key={video.id}>
                        <div className="max-w-[480px] w-[100%] rounded-2xl md:rounded-none mx-auto h-full flex bg-[#2e2a2a] p-3 py-6 md:p-8 flex-row md:flex-col items-center justify-start md:justify-center text-center md:text-left">
                            <Image alt="team" width={300} height={300} className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                            <div className="flex-grow pt-6 w-full md:pl-4">
                                <p className="font-medium text-3xl mb-4 md:text-lg text-white">Holden Caulfield</p>
                                <p className='text-sm pr-3'>DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex my-4 md:my-0">
                                    <a className="text-[#1761B0]">
                                        Watch Now
                                    </a>
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const VideoPlayer = () => {
    // Dummy video data
    const videoData = {
        id: 1,
        title: 'Sample Video',
        url: 'https://www.youtube.com/embed/yourvideoid',
    };

    return (
        <div className=''>
            <iframe
                width="100%"
                height="400"
                src={videoData.url}
                title={videoData.title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const LiveTV = () => {
    return (
        <Layout>
            <section className='container bg-transparent '>
                <div className="grid md:grid-cols-12 md:px-10 py-12 gap-2">
                    <div className="md:col-span-8">
                        <VideoPlayer />
                        <div className='my-6'>
                            <h2 className='text-xl mb-4'>Today’s live </h2>
                            <div className="grid md:grid-cols-3 gap-3">
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                            </div>
                        </div>

                        <div className='my-6'>
                            <h2 className='text-xl mb-4'>Latest blogs </h2>
                            <div className="grid md:grid-cols-3 gap-3">
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
                            </div>
                        </div>
                    </div>
                    <div className=" md:col-span-4 md:ml-2 md:pl-4 md:border-l space-y-8 md:space-y-4">
                        <VideoList />
                        <VideoList />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LiveTV;

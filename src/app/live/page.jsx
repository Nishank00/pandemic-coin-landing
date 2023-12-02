import React from 'react';
import VideoCard from '../components/VideoCard';

const VideoList = () => {
    // Dummy data for the list of videos
    const videoList = [
        { id: 1, title: 'Video 1' },
        { id: 2, title: 'Video 2' },
        { id: 3, title: 'Video 3' },
        // Add more videos as needed
    ];

    return (
        <div>
            <div className="bg-[#3A3A3A] p-3">
                <p>Top News</p>
            </div>
            <ul className=' space-y-2'>
                {videoList.map(video => (
                    <li key={video.id}>
                        <div class="h-full flex bg-[#231E1E] p-3 sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                            <div class="flex-grow pl-4">
                                <p class="title-font font-medium text-lg text-white">Holden Caulfield</p>
                                <p className='text-sm pr-3'>DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-flex">
                                    <a class="text-[#1761B0]">
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
        <section className='container'>
            <div className="grid grid-cols-12 px-10 py-12 gap-2">
                <div className="col-span-8">
                    <VideoPlayer />
                    <div className='my-6'>
                        <h2 className='mb-4'>Today’s live </h2>
                        <div className="grid grid-cols-3 gap-3">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                    </div>

                    <div className='my-6'>
                        <h2 className='mb-4'>Latest blogs </h2>
                        <div className="grid grid-cols-3 gap-3">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                    </div>
                </div>
                <div className="col-span-4 ml-2 pl-4 border-l space-y-4">
                    <VideoList />
                    <VideoList />
                </div>
            </div>
        </section>
    );
};

export default LiveTV;

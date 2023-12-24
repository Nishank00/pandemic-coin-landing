import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoComp = (props) => {
    const [playing, setPlaying] = useState(props.autoplay);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setPlaying(true);
                } else {
                    setPlaying(false);
                }
            });
        }, options);

        observer.observe(containerRef.current);

        return () => {
            if (containerRef.current instanceof Element) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        setDuration(playerRef.current?.getDuration() || 0);
    });

    const handlePlay = () => {
        props.videoDuration
            ? (props.videoDuration(duration), playerRef.current.seekTo(0))
            : null,
            setPlaying(true);
    };
    const handlePause = () => setPlaying(false);
    return (
        <div className="relative max-w-full h-full overflow-hidden" ref={containerRef}>
            <ReactPlayer
                ref={playerRef}
                // url={props?.url}
                url={teaser}
                playing={playing}
                autoplay={true}
                width="100%"
                height="100%"
                onPlay={handlePlay}
                onPause={handlePause}
                onProgress={handleProgress}
                muted={props.autoplay ? true : false}
                loop={props.loop ? true : false}
                playsinline
                
            />

        </div>
    );
};

VideoComp.defaultProps = {
    url: '../../../../assets/video/dummy.mp4',
};

export default VideoComp;

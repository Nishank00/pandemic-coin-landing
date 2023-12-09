import React, { useState, useEffect } from 'react';


const sliderData = [
    {
        name: "Underground Shelters",
        title: 'Unveiling the Hidden Elegance of Modern Underground Living',
        id: "#01",
        content: "Embrace the serenity beneath the surface, where the whispers of nature harmonize with the heartbeat of your underground haven."
    },
    {
        name: "Blockchain Security",
        title: 'Unveiling the Hidden Elegance of Modern Underground Living',
        id: "#02",
        content: "Discover the latest in blockchain technology ensuring the security of your data."
    },
    {
        name: "Investment and Trading",
        title: 'Unveiling the Hidden Elegance of Modern Underground Living',
        id: "#03",
        content: "Learn about investment opportunities and trading strategies for financial success."
    },
];

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    // Set the first tab as active when the component mounts
    useEffect(() => {
        setActiveIndex(0);
    }, []);

    return (
        <section className="p-10 md:p-16 min-h-screen" id="hero">
            <div className="w-2/3 mb-24" id='slide-overlay'>
                <h1 className="text-4xl md:text-6xl transtion-all text-white font-semibold serif tracking-tighter">
                    {sliderData[activeIndex].title}
                </h1>
                <p className={`text-lg font-light w-4/6 transition-all mt-6
                    `}>
                    {sliderData[activeIndex].content}
                </p>
            </div>
            <div className="flex flex-col gap-12 my-8 w-fit" id='slide-list'>
                {sliderData.map((item, index) => (
                    <button
                        className={`flex flex-col text-left ${index === activeIndex ? 'text-blue-400' : 'text-gray-100'
                            }`}
                        key={item.id}
                        onClick={() => handleTabClick(index)}
                    >
                        <p className={`font-bold transition-all ${index === activeIndex ? 'text-blue-400 text-4xl' : 'text-[#ffffff20] text-2xl'
                            }`}>
                            {item.id}
                        </p>
                        <div className={`border-b-2 mt-2 transition-all border-${index === activeIndex ? 'blue-400 w-full' : 'gray-400 w-1/2'}`} />
                        <span className={`w-4/6 mt-3 font-semibold transition-all ${index === activeIndex ? 'text-white  text-lg' : 'text-[#ffffff20] text-base'}
                            }`}>
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;

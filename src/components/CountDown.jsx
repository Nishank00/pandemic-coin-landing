import React, { useState } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import Timer from './Timer';

const CountDown = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleButtonClick = () => {
        setCurrentSlide(currentSlide === 1 ? 2 : 1);
    };

    const slideComponents = [
        { title: "🔥 Token sale open in :", component: <Timer />, detail: null },
        { title: "Total offering", component: null, detail: '500FBX' },
        { title: "Presale Price", component: null, detail: '-' },
        { title: "Purchase Limit", component: null, detail: '-' },
        { title: "Generation Event", component: null, detail: 'Q1 2023' },
        { title: "More details", component: null, detail: 'Q2 2024' }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-12 mx-auto">
                <div className="relative px-12 py-16 bg-white rounded-[20px]">
                    <div className={`grid grid-cols-1 md:grid-cols-4 gap-8`}>
                        {[1, 2, 3, 4, 5, 6].slice((currentSlide - 1) * 4, currentSlide * 4).map((index) => (
                            <div key={index} className="rounded-[20px] transition-all flex flex-col items-start">
                                <p className="text-sm font-medium text-[#707070]">{slideComponents[index - 1].title}</p>
                                <div className="mt-4">
                                    {slideComponents[index - 1].component && (
                                        // Render the component if it exists
                                        slideComponents[index - 1].component
                                    )}
                                    {slideComponents[index - 1].detail && (
                                        // Render the detail if it exists
                                        <p className='leading-relaxed text-[20px] text-black font-bold'>{slideComponents[index - 1].detail}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {currentSlide === 1 ? (
                        <button
                            className="absolute top-[50%] translate-y-[-120%] transition-all right-0 text-lg mt-4 mr-4"
                            onClick={handleButtonClick}
                        >
                            <FaArrowRightLong />
                        </button>
                    ) : (
                        <button
                            className="absolute top-[50%] translate-y-[-120%] transition-all left-0 text-lg mt-4 ml-4"
                            onClick={handleButtonClick}
                        >
                            <FaArrowLeftLong />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CountDown;

"use client";
import React, { useState } from 'react'
import ImageSlider from '../components/common/ImageSlider';

export default function Invest() {
    const [selectedType, setSelectedType] = useState('FAMILY');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedService, setSelectedService] = useState('');

    const handleTypeChange = (type) => {
        setSelectedType(type);
        setSelectedModel('');
        setSelectedSize('');
        setSelectedService('');
    };

    const handleModelChange = (model) => {
        setSelectedModel(model);
        setSelectedSize('');
        setSelectedService('');
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setSelectedService('');
    };

    const handleAdditionalServiceChange = (service) => {
        setSelectedService(service);
    };

    const handleContactUs = () => {
        // Yaha link dalo
    };
    return (
        <div className="bg-pdc-d-gray h-fit w-[100%] flex  flex-col md:flex-row">
            <div className=" md:sticky md:top-[96px] static h-full md:w-[60%] w-full">
                <ImageSlider />
            </div>
            <div className="b_grey h-full md:w-[40%] w-full md:p-[40px]">
                <div className="p-4">

                    {/* CONFIGURATOR */}
                    <div>
                        <h1 className="text-xl font-bold font_nun mb-4">CONFIGURATOR OF A PRACTICAL AND SAFE BOMB SHELTER</h1>
                        <div className="flex gap-[20px] flex-wrap">
                            <button
                                type="button"
                                onClick={() => handleTypeChange('FAMILY')}
                                className={`h-[60px]  font-bold  w-fit px-4 font_cat rounded-[15px]  border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedType === 'FAMILY' ? 'bg-[#BB1A37] text-white border-transparent ' : ''
                                    }`}
                            >
                                FAMILY
                            </button>
                            <button
                                type="button"
                                onClick={() => handleTypeChange('PUBLIC')}
                                className={`h-[60px] font_cat font-bold  w-fit px-4 rounded-[15px] border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedType === 'PUBLIC' ? 'bg-[#BB1A37] text-white border-transparent ' : ''
                                    }`}
                            >
                                PUBLIC
                            </button>
                            <button
                                type="button"
                                onClick={() => handleTypeChange('MILITARY')}
                                className={`h-[60px] font_cat font-bold  w-fit px-4 rounded-[15px] border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedType === 'MILITARY' ? 'bg-[#BB1A37] text-white border-transparent ' : ''
                                    }`}
                            >
                                MILITARY
                            </button>
                        </div>

                    </div>

                    {selectedType === 'FAMILY' && (
                        <>
                            <h2 className="text-xl font-bold font_nun my-4">MODEL</h2>
                            <div className="flex space-x-4">
                                <div className="flex  gap-[20px] flex-wrap">
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('ASCETIC')}
                                        className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'ASCETIC' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        ASCETIC
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('BASIC')}
                                        className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'BASIC' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        BASIC
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('COMFORT')}
                                        className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'COMFORT' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        COMFORT
                                    </button>

                                </div>
                            </div>

                            <h2 className="text-xl font-bold font_nun my-4">SIZE</h2>
                            <div className="flex  gap-[20px] flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('15м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '15м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    15м²
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('31м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '31м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    31м²
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('46м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '46м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    46м²
                                </button>
                            </div>
                        </>
                    )}

                    {selectedType === 'PUBLIC' && (
                        <>
                            <h2 className="text-xl font-bold font_nun my-4">MODEL</h2>
                            <div className="flex space-x-4">
                                <div className="flex  gap-[20px] flex-wrap">
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('P32')}
                                        className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'P32' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        P32
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('P60')}
                                        className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'P60' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        P60
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('P80')}
                                        className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'P80' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        P80
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('P100')}
                                        className={`h-[60px] px-4 font_cat  rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'P100' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        P100
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('IT MODULE')}
                                        className={`px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'IT MODULE' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        IT MODULE
                                    </button>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold font_nun my-4">SIZE</h2>
                            <div className="flex  gap-[20px] flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('35,77м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '35,77м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    35,77м²
                                </button>
                            </div>
                        </>
                    )}

                    {selectedType === 'MILITARY' && (
                        <>
                            <h2 className="text-xl font-bold font_nun my-4">MODEL</h2>
                            <div className="flex space-x-4">
                                <div className="flex gap-[20px] flex-wrap">
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('SBUA FirstAid')}
                                        className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'SBUA FirstAid' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        SBUA FirstAid
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('SBUA Strategic')}
                                        className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'SBUA Strategic' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        SBUA Strategic
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('SBUA Casern')}
                                        className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'SBUA Casern' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        SBUA Casern
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleModelChange('SBUA Bath')}
                                        className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedModel === 'SBUA Bath' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                            }`}
                                    >
                                        SBUA Bath
                                    </button>

                                </div>
                            </div>

                            <h2 className="text-xl font-bold font_nun my-4">SIZE</h2>
                            <div className="flex  gap-[20px] flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('29,84м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '29,84м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    29,84м²
                                </button>
                            </div>
                        </>
                    )}

                    {/* SERVICES */}
                    <div>
                        <h2 className="text-xl font-bold font_nun mt-4">ADDITIONAL SERVICES</h2>
                        <p className="mb-2 text-gray-300">
                            The final price of additional services depends on consultation with a personal manager
                        </p>

                        {/* Two radio button options */}
                        <div className="flex justify-between">
                            <div className='flex flex-col gap-[20px]'>
                                <button
                                    type="button"
                                    onClick={() => handleAdditionalServiceChange('Geodetic project')}
                                    className={`h-fit w-full p-[20px] font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedService === 'Geodetic project' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    <div className='flex text-xl font-bold font_nun justify-between'>
                                        <div className='uppercase text-start'>Geodetic project</div>
                                        <p className="text-xl font-bold">$2000</p>
                                    </div>

                                    <p className={`text-sm transition-all duration-500 ease-in-out  text-start mt-[5px] ${selectedService === 'Geodetic project' ? "text-white" : "text-gray-500"}`}>
                                        finished product + project (soils, groundwater & communication networks investigation)
                                    </p>

                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleAdditionalServiceChange('Turnjey solution')}
                                    className={`h-fit w-full p-[20px] font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedService === 'Turnjey solution' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    <div className='flex text-xl font-bold font_nun justify-between'>
                                        <div className='uppercase text-start'>Turnjey solution</div>
                                        <p className="text-xl font-bold">$5000</p>
                                    </div>

                                    <p className={`text-sm transition-all duration-500 ease-in-out  text-start mt-[5px] ${selectedService === 'Turnjey solution' ? "text-white" : "text-gray-500"}`}>
                                        turnkey product solution (we deliver a project, geodesy and installation work)
                                    </p>

                                </button>

                            </div>

                        </div>
                    </div>

                </div>
                {/* Contact Us section */}

                <div className="p-4">

                    <div className="flex justify-between items-center">
                        <div className='text-xl font-bold font_nun'>
                            $1900
                        </div>
                        <div>
                            <button onClick={handleContactUs} className="bg-[#BB1A37] text-white border-transparent font_cat font-bold  w-fit  rounded-[15px] px-4 py-2 ">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

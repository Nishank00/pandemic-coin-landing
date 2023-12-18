import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee'
import feature1 from '../../../assets/feature-image1.png'
import feature2 from '../../../assets/feature-image2.png'
import feature3 from '../../../assets/feature-image3.png'
import feature4 from '../../../assets/feature-image4.png'
import DynamicTitle from '../utils/dynamic-title';
import { motion } from 'framer-motion'
import HoverEffect from './MouseShine';

const Feature = () => {
    const features = [
        {
            number: '#01',
            title: 'COMMUNITY SHELTER',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: feature1,
            backgroundColor: 'bg-[#3A3A3A]',
            color: 'text-[#342CB2]',
        },
        {
            number: '#02',
            title: 'PDFV',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: feature2,
            backgroundColor: 'bg-gradient-to-b from-[#140E7B17] to-[#140E7B17]',
            color: 'text-[#342CB2]',
        },
        {
            number: '#03',
            title: 'INVESTMENT AND TRADING',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: feature3,
            backgroundColor: 'bg-[#3A3A3A]',
            color: 'text-[#342CB2]'
        },
        {
            number: '#04',
            title: 'SECURE AND TRADE',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: feature4,
            backgroundColor: 'bg-gradient-to-b from-[#140E7B17] to-[#140E7B17]',
            color: 'text-[#342CB2]',
        },
    ];

    return (
        <section className="body-font">
            <div className="container relative px-[0%] mx-auto">
                {/* <div className="flex flex-col relative z-10 text-center w-full mb-16">
                    <h1 className="text-3xl md:text-5xl font-medium title-font mb-4 text-white">Our Key Features</h1>
                </div> */}
                <DynamicTitle title="key features" customClass="tracking-[-3.36px]" description="" />

                <motion.div
                    initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .4
                            }
                        },
                    }}
                    className="flex flex-wrap -m-4 relative z-10 ">
                    <Marquee>
                        {features.map((feature, index) => (

                            <div data-aos="fade-in" key={index} className={`p-4 w-[360px] md:w-[420px] md:max-h-[600px] max-h-[600px] flex`}>
                                <HoverEffect >
                                    <div className={`overflow-hidden flex-1 rounded-[20px] border-[0.873px] border-[solid] border-[#342CB2] border-opacity-50 ${feature.backgroundColor}`}>
                                        <div className="p-6 py-12 text-center w-full">
                                            <p className={` font-bold text-4xl ${feature.color} font-semibold mb-3  `}>{feature.number}</p>
                                            <h1 className="text-[30px] h-[100px] inline-flex items-center justify-center font-medium text-[#F4F1F8] mb-3">{feature.title}</h1>
                                            <p className="leading-relaxed mb-3 text-gray-500">{feature.description}</p>
                                        </div>
                                        <Image width={720} height={600} className="w-full object-cover object-center" src={feature.imageUrl} alt="blog" />
                                    </div>
                                </HoverEffect>
                            </div>

                        ))}
                    </Marquee>
                </motion.div>
                <div className="bg-gradient-to-tr from-[#FF071750] to-[#342CB250] absolute w-[900px] blur-[120px] z-0 rounded-full h-[900px] -top-[50%] -right-[30%]"></div>
                <div className="bg-gradient-to-tr from-[#FF071740] to-[#342CB240] absolute w-[500px] blur-[120px] z-0 rounded-full h-[500px] -bottom-[60%] -left-[10%]"></div>
            </div>
        </section>
    );
};

export default Feature;

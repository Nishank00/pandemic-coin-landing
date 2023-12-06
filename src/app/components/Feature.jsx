import React from 'react';
import Marquee from 'react-fast-marquee'

const Feature = () => {
    const features = [
        {
            number: '#01',
            title: 'COMMUNITY SHELTER',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-[#3A3A3A]',
            color: 'text-[#342CB2]',
        },
        {
            number: '#02',
            title: 'PDFV',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-gradient-to-b from-[#140E7B17] to-[#140E7B17]',
            color: 'text-[#342CB2]',
        },
        {
            number: '#03',
            title: 'INVESTMENT AND TRADING',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-[#3A3A3A]',
            color: 'text-[#342CB2]'
        },
        {
            number: '#04',
            title: 'SECURE AND TRADE',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-gradient-to-b from-[#140E7B17] to-[#140E7B17]',
            color: 'text-[#342CB2]',
        },
        {
            number: '#05',
            title: 'PEN APP',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-[#3A3A3A]',
            color: 'text-[#342CB2]'
        },
    ];

    return (
        <section className="body-font">
            <div className="container px-[0%] py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-3xl md:text-5xl font-medium title-font mb-4 text-white">Our Key Features</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Marquee>
                        {features.map((feature, index) => (
                            <div key={index} className={`p-4 w-[420px] flex`}>
                                <div className={`overflow-hidden flex-1 rounded-[20px] border border-[#7e7e7e] ${feature.backgroundColor}`}>
                                    <div className="p-6 py-12 text-center w-full">
                                        <p className={` font-bold text-4xl ${feature.color} font-semibold mb-3  `}>{feature.number}</p>
                                        <h1 className="text-[30px] h-[100px] inline-flex items-center justify-center font-medium text-[#F4F1F8] mb-3">{feature.title}</h1>
                                        <p className="leading-relaxed mb-3 text-gray-500">{feature.description}</p>
                                    </div>
                                    {/* <img className="w-full object-cover object-center" src={feature.imageUrl} alt="blog" /> */}
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Feature;

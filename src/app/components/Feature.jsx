import React from 'react';

const Feature = () => {
    const features = [
        {
            number: '#01',
            title: 'UNDERGROUND SHELTER',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-white',
            color: 'text-black',
        },
        {
            number: '#02',
            title: 'PDFV',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-black',
            color: 'text-white',
        },
        {
            number: '#03',
            title: 'INVESTMENT AND TRADING',
            description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
            imageUrl: 'https://dummyimage.com/720x600',
            backgroundColor: 'bg-white',
            color: 'text-black'
        },
    ];

    return (
        <section className="body-font">
            <div className="container px-[5%] py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-3xl md:text-5xl font-medium title-font mb-4 text-white">Our Key Features</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {features.map((feature, index) => (
                        <div key={index} className={`p-4 md:w-1/3 flex`}>
                            <div className={`overflow-hidden flex-1 ${feature.backgroundColor}`}>
                                <div className="p-6 py-12 text-center w-full">
                                    <p className={` font-bold text-4xl ${feature.color} font-semibold mb-3  `}>{feature.number}</p>
                                    <h1 className="text-[30px] h-[100px] inline-flex items-center justify-center font-medium text-[#1761B0] mb-3">{feature.title}</h1>
                                    <p className="leading-relaxed mb-3 text-gray-500">{feature.description}</p>
                                </div>
                                {/* <img className="w-full object-cover object-center" src={feature.imageUrl} alt="blog" /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;

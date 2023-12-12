import React from 'react';
import Advisor from './Advisor';
import Marquee from 'react-fast-marquee';

const Advisors = () => {
    const teamData = [
        { title: "Lions business media" },
        { title: "Wolfpack crypto media" },
        { title: "crypto scanner" },
        { title: "Ethereum" },
        { title: "Swytch web3 technologies " },
        { title: "Simply web3 technologies" },
        { title: "Rebellion NFT" },
        { title: "Web3 events" },
    ];

    return (
        <section className="text-gray-400 relative body-font">
            <div className="bg-[#342CB250] absolute w-[200px] blur-[120px] rounded-full h-[200px] top-[5%] -left-[5%] z-0"></div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="text-5xl font-medium mb-4 text-[#FB2525]">Advisors</h1>
                </div>
                <div>
                    <Marquee>
                        {teamData.map((member, index) => (
                            <Advisor key={index} {...member} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Advisors;

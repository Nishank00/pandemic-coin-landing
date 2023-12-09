import React from 'react';
import Advisor from './Advisor';

const Advisors = () => {

    const teamData = [
        {
            name: "Ahsan Usman",
            role: "Co-Founder & COO",
            desc: "Ahsan Usman is a distinguished professional with a comprehensive skill set",
            link: "https://sample.com",
            linkedin: "https://sample.com",
            img: '/assets/bg.png',
        },
        {
            name: "Asad Zeeshan",
            role: "Co-Founder & CEO / CMO",
            desc: "He is a distinguished professional with a comprehensive skill set",
            link: "https://sample.com",
            linkedin: "https://sample.com",
            img: '/assets/bg.png',
        },
        {
            name: "Abhayraj Gohil",
            role: "Cofounder & CTO",
            desc: "He is a distinguished professional with a comprehensive skill set",
            link: "https://sample.com",
            linkedin: "https://sample.com",
            img: '/assets/bg.png',
        }]

    return (
        <section className="text-gray-400 relative body-font">
            <div className="bg-[#342CB250] absolute w-[200px] blur-[120px] rounded-full h-[200px] top-[5%] -left-[5%] z-0"></div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="text-5xl font-medium mb-4 text-[#FB2525]">Advisors</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-4 m-4 my-12">
                    {teamData.slice(0, 3).map((member, index) => (
                        <Advisor key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advisors;

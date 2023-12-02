import React from 'react';
import Advisor from './Advisor';
import { teamData } from '@/data/team-data';

const Advisors = () => {

    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#FB2525]">Advisors</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 m-4 my-12">
                    {teamData.map((member, index) => (
                        <Advisor key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advisors;

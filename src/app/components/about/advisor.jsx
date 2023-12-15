import React from 'react';
import { teamData } from "@/data/team-data";
import DynamicTitle from '../utils/dynamic-title';
import { motion } from 'framer-motion';

const Advisor = ({ title }) => {
    const gridVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="text-pdc-l-gray relative body-font">
            <div className="container px-5 py-16 mx-auto">
                <DynamicTitle title={title} description="" />
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    variants={gridVariants}
                    initial="hidden"
                    animate="show"
                >
                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-full flex items-center justify-center flex-col"
                        >
                            <h2 className="text-gray-100 title-font font-medium">{member.name}</h2>
                            <p className="text-pdc-l-gray text-sm md:text-base">{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Advisor;

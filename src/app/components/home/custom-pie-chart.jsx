import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import ActiveShape from "./active-shape";
import { motion } from 'framer-motion'

const CustomPieChart = ({ data, activeIndex, onPieEnter }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className=""
        >
            <PieChart width={1140} height={523}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={<ActiveShape />}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={119}
                    outerRadius={169}
                    dataKey="value"
                    stroke="#1C1D26"
                    onMouseEnter={onPieEnter}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={
                                index === activeIndex ? "#BB1A37" : "#342CB2"
                            }
                        
                        />
                    ))}
                </Pie>
            </PieChart>
        </motion.div>
    );
};

export default CustomPieChart;

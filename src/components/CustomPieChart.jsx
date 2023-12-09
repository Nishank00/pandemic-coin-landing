import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import ActiveShape from "./ActiveShape";

const CustomPieChart = ({ data, activeIndex, onPieEnter }) => {
    return (
        <PieChart width={1000} height={800}>
            <Pie
                activeIndex={activeIndex}
                activeShape={<ActiveShape />}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={240}
                outerRadius={320}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === activeIndex ? "#FC4F5A" : "#342CB2"} />
                ))}
            </Pie>
        </PieChart>
    );
};

export default CustomPieChart;

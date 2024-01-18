import React from "react";
import { Sector, Text } from "recharts";
import { motion } from "framer-motion";

const ActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    const pathVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 1, pathLength: 1 },
    };

    return (
        <motion.g
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={pathVariants}
        >
            <motion.text
                initial="hidden"
                animate="visible"
                exit="hidden"
                x={cx}
                y={cy - 20}
                dy={20}
                fontSize={21}
                fontWeight={500}
                textAnchor="middle"
                fill={"#342CB2"}
            >
                Total Supply
            </motion.text>
            <text
                x={cx}
                y={cy + 20}
                dy={0}
                fontSize={16}
                fontWeight={500}
                textAnchor="middle"
                fill={"#fff"}
            >
                10,00000,00 tokens
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={"#342CB2 "}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={innerRadius - 6}
                outerRadius={outerRadius + 10}
                fill={"#ff0000"}

            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            {/* <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#fff"
            >{`${value}`}</text> */}
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                // dy={18}
                textAnchor={textAnchor}
                fill="#fff"
            >
                {`Rate ${(percent * 100).toFixed(2)}%`}
            </text>
        </motion.g>
    );
};

export default ActiveShape;

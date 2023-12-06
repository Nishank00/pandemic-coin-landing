import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const COLORS = [
    { start: "#342CB2", end: "#DE1012" },
];

const data = [
    { name: "Advisor Sale", value: 2 },
    { name: "Team", value: 22 },
    { name: "Public Sale", value: 0.7 }
];

const renderActiveShape = (props) => {
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
        value
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

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={-30}
                fontSize={32}
                fontWeight={600}
                fontFamily="Caudex, san-serif"
                textAnchor="middle"
                fill={"#342CB2"}
            >
                Total Supply
            </text>
            <text
                x={cx}
                y={cy}
                dy={10}
                fontSize={18}
                fontFamily="Catamaran, serif"
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
                fill={`url(#myGradient)`}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={innerRadius - 20}
                outerRadius={outerRadius + 20}
                fill={`#A4A4A450`}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={"#5c4cb6"}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#DE1012"
                fontFamily="Catamaran, sans-serif"
                fontWeight={800}
            >{`${payload.name} ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#fff"
                fontFamily="Catamaran, sans-serif"
                fontWeight={600}
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

export default function Tokenomics() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <PieChart width={1000} height={800} className="border-2 mx-auto">
            <defs>
                <linearGradient id={`myGradient`} gradientTransform="rotate(90)">
                    {COLORS.map((color, index) => (
                        <><stop offset="0%" stopColor={COLORS[0].start} />
                        <stop offset="100%" stopColor={COLORS[0].end} /></>
                    ))}
                </linearGradient>

            </defs>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={"50%"}
                cy={"50%"}
                innerRadius={280}
                outerRadius={320}
                fill={`url(#myGradient)`}
                dataKey="value"
                onMouseEnter={onPieEnter}
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={index === activeIndex ? "#fff" : `url(#myGradient)`}
                    />
                ))}
            </Pie>
        </PieChart>
    );
}

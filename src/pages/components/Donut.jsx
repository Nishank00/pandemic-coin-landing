import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";
import './donut-chart.module.css';

const MARGIN_X = 150;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 20;

const colors = [
    {
        start: "rgba(252, 79, 90, 1)", // Translucent red
        end: "rgba(252, 79, 90, 0.9)", // Transparent red
    },
    {
        start: "rgba(252, 79, 90, 0.8)", // Translucent red
        end: "rgba(252, 79, 90, 0.75)", // Transparent red
    },
    {
        start: "rgba(52, 44, 178, 1)", // Translucent blue
        end: "rgba(52, 44, 178, .8)", // Transparent blue
    },
    {
        start: "rgba(52, 44, 178, 0.8)", // Translucent blue
        end: "rgba(52, 44, 178, 0.8)", // Transparent blue
    },
    {
        start: "rgba(52, 44, 178, .8)", // Translucent blue
        end: "rgba(52, 44, 178, 1)", // Transparent blue
    }
];

function Donut({ width, height, data }) {
    const ref = useRef(null);
    const defsRef = useRef(null);

    const [hoveredSlice, setHoveredSlice] = useState(null);

    const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;
    const innerRadius = radius / 1.5;

    useEffect(() => {
        // Create <defs> element only once
        const defs = d3.select(defsRef.current);

        colors.forEach((color, i) => {
            const gradientId = `gradient-${i}`;
            if (defs.select(`#${gradientId}`).empty()) {
                const gradient = defs.append("linearGradient").attr("id", gradientId);

                gradient
                    .attr("x1", "0%")
                    .attr("y1", "0%")
                    .attr("x2", "0%")
                    .attr("y2", "100%");

                gradient.append("stop").attr("offset", "0%").attr("stop-color", color.start);
                gradient.append("stop").attr("offset", "100%").attr("stop-color", color.end);
            }
        });
    }, [colors]);

    const pie = d3.pie()
        .value((d) => d.value)
        (data);

    const arcGenerator = d3.arc();

    const handleMouseOver = (index) => {
        setHoveredSlice(index);
    };

    const handleMouseOut = () => {
        setHoveredSlice(null);
    };

    const shapes = pie.map((grp, i) => {
        const sliceInfo = {
            innerRadius,
            outerRadius: radius,
            startAngle: grp.startAngle,
            endAngle: grp.endAngle,
        };
        const centroid = arcGenerator.centroid(sliceInfo);
        const slicePath = arcGenerator(sliceInfo);

        const gradientId = `gradient-${i}`;
        const gradient = createGradient(gradientId, colors[i].start, colors[i].end);

        const inflexionInfo = {
            innerRadius: radius + INFLEXION_PADDING,
            outerRadius: radius + INFLEXION_PADDING,
            startAngle: grp.startAngle,
            endAngle: grp.endAngle,
        };
        const inflexionPoint = arcGenerator.centroid(inflexionInfo);

        const isRightLabel = inflexionPoint[0] > 0;
        const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
        const textAnchor = isRightLabel ? "start" : "end";
        const label = grp.data.name + " (" + grp.value + ")";

        return (
            <g
                key={i}
                className={`slice transition-all`}
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={handleMouseOut}
            >
                <path
                    d={arcGenerator(sliceInfo)}
                    fill={`url(#${gradientId})`}
                    className={`${hoveredSlice === i ? 'hovered' : ''}`}
                />
                <circle cx={centroid[0]} cy={centroid[1]} fill="white"
                    r={4} />
                <line
                    x1={centroid[0]}
                    y1={centroid[1]}
                    x2={inflexionPoint[0]}
                    y2={inflexionPoint[1]}
                    stroke="white"
                    fill="white"
                />
                <line
                    x1={inflexionPoint[0]}
                    y1={inflexionPoint[1]}
                    x2={labelPosX}
                    y2={inflexionPoint[1]}
                    stroke="white"
                    fill="white"
                />
                <text
                    x={labelPosX + (isRightLabel ? 12 : -12)}
                    y={inflexionPoint[1]}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    fontSize={14}
                    fill="white"
                    id="text"
                >
                    {label}
                </text>
            </g>
        );
    });

    function createGradient(id, startColor, endColor) {
        const defs = d3.select(ref.current).append("defs");
        const gradient = defs.append("linearGradient").attr("id", id);

        gradient
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%") // Adjusted for a vertical gradient
            .attr("y2", "100%"); // Adjusted for a vertical gradient

        gradient.append("stop").attr("offset", "0%").attr("stop-color", startColor);
        gradient.append("stop").attr("offset", "100%").attr("stop-color", endColor);

        return gradient;
    }

    return (
        <svg width={width} height={height} style={{ display: "inline-block" }}>
            <defs ref={defsRef} />
            <g
                transform={`translate(${width / 2}, ${height / 2})`}
                className="container"
                ref={ref}
                id="linearGradient"
            >
                {shapes}
            </g>
        </svg>
    );
}

export default Donut;

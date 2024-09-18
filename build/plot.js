import functionPlot from "function-plot";

const plotTarget = "quadraticChart";
const yDomainMargin = 5;

export function plotQuadratic(a, b, c) {
    const yDomain = Math.abs(c) + yDomainMargin;
    functionPlot({
        target: `#${plotTarget}`,
        width: document.getElementById("quadraticChart").offsetWidth,
        xAxis: {
            label: 'x',
            domain: [-10, 10]
        },
        yAxis: {
            label: 'y',
            domain: [-yDomain, yDomainMargin]
        },
        grid: true,
        data: [
            {
                fn: `${a} * x^2 + ${b} * x + ${c}`
            }
        ]
    })
}
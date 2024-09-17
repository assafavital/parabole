import functionPlot from "function-plot";

const plotTarget = "quadraticChart";
const yDomainMargin = 5;

export function plotQuadratic(a, b, c) {
    functionPlot({
        target: `#${plotTarget}`,
        width: document.getElementById("guessContainer").offsetWidth,
        xAxis: {
            label: 'x',
            domain: [-10, 10]
        },
        yAxis: {
            label: 'y',
            domain: [-(c + yDomainMargin), c + yDomainMargin]
        },
        grid: true,
        data: [
            {
                fn: `${a} * x^2 + ${b} * x + ${c}`
            }
        ]
    })
}
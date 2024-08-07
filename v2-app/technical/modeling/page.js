// TODO:
//  - Exxon Mobil project.
//  - ABMs
//  - Natural Systems Simulations
//  - Visualising Pure Statistics

// Extension:
//  - Conway automaton in glowy orange blocky SF style. Also allow people to build
//    their own from simple rules.
//  - Natural simulations such as population growth, spiral drawing machine.
//  - Statistical process visualisations.
//  - animate a chart with many series starting divergent and converging to
//    a single line. Render in real time.
//  - D3 (https://observablehq.com/@d3/multi-line-chart/2?intent=fork)
//  - AMCharts ((https://www.amcharts.com/demos-v4/highlighting-line-chart-series-on-legend-hover-v4/)

// Extension: animate a chart with many series starting divergent and converging to
// a single line. Render in real time.
// - D3 (https://observablehq.com/@d3/multi-line-chart/2?intent=fork)
// - AMCharts ((https://www.amcharts.com/demos-v4/highlighting-line-chart-series-on-legend-hover-v4/)


import NavPageBuilder from "../../_components/_navPageBuilder/navPageBuilder";

export default function econModeling() {
  const data = {
    title: 'Modeling',
    sections: [
      {
        metadata: {
          href: ''
          // href: '/technical/modeling/exxonMobil',
        },
        data: {
          title: 'Exxon Mobil Security Returns',
          summaryText: '(coming soon) Read analysis the returns of Exxon Mobil securities Fover time.'
        
        }
      },
      {
        metadata: {
          href: ''
          // href: '/technical/modeling/cellularAutomata',
        },
        data: {
          title: 'Cellular Automata',
          summaryText: '(coming soon) Explore the emergent properties of simple rules in a discrete grid.'
        }
      },
    ]
  }

  return <NavPageBuilder data={data} />;
}

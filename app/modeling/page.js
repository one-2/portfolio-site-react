// TODO:
//  - turn this into a functional rendering. Same template as Learning Machines and Software.
//  - Exxon Mobil project.
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

export default function econModeling() {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h1>Software.</h1>
      </div>
      <ProjectsGrid />
    </div>
  )
}

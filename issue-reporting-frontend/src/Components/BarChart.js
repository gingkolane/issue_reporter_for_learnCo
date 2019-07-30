import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {


  componentDidMount() {
    this.drawChart();
  }
  
  drawChart() {
    // const data = [12, 5, 6, 6, 9, 10];
    const data = this.props.data

    const svg = d3.select("#bar-chart")
    .append("svg")
    .attr("width", this.props.width)
    .attr("height", this.props.height)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i )
      .attr("y", (d, i) => 100 - d)
      .attr("width", 6)
      .attr("height", (d, i) => d)
      .attr("fill", "green")
      // .attr("x", (d, i) => i * 70)
      // .attr("y", (d, i) => 100 - 10 * d)
      // .attr("width", 65)
      // .attr("height", (d, i) => d * 10)
      // .attr("fill", "green")
  }
        
  render(){
    console.log('this is data in barchart', this.props.data)
    return (
      <>
        <div id="bar-chart"></div>
      </>
    )
  }
}
    
export default BarChart;
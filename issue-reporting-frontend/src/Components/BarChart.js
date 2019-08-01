import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  
  drawChart = () => {

    const data = this.props.repos.map (repo =>  {
     return (repo.forks_count - repo.open_issues_count)/repo.forks_count
    })

    d3.select("#bar-chart").html("") 

    const svg = d3.select("#bar-chart")
    .append("svg")
    .attr("width", this.props.width)
    .attr("height", this.props.height)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 30) //control the spacing between bars
      .attr("y", (d, i) => this.props.height - 1000 * d) //revert the bar 
      .attr("width", 20)
      .attr("height", (d, i) => d * 1000)
      .attr("fill", "green");

    svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => this.props.height - 1000 * d - 3);
  }
        
  render(){
    this.props.repos && this.drawChart();
    return (
      <>
        <div id="bar-chart"></div>
      </>
    )
  }
}
    
export default BarChart;
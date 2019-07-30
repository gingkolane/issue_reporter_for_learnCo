import React, { Component } from 'react';
import BarChart from '../components/BarChart';


class GraphicsContainer extends Component {

  state = {
    width: 700,
    height: 500,
    id: 'bar-chart'
  }
  // const forked = this.props.repos.map(repo => repo.forks_count);
  // const completed = this.props.repos.map(repo => repo.open_issues_count);
  // const incomplete = this.props.repos.map(repo => parseInt(repo.forks_count) - parseInt(repo.open_issues_count));

  render() { 
    console.log('this is this.props.repos in graphics container', this.props.repos)
    return ( 
      <>
      <h1>Hi from the GraphicsContainer</h1>
      <BarChart data={this.props.repos.map(repo => repo.forks_count)} width={this.state.width} height={this.state.height}/>
      </>
     )
  }
}
 
export default GraphicsContainer;

// reference for using d3

// https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0/

// different approach for react d3 integration
// https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71

// react-js ecosystem
// https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/
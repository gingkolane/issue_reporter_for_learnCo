import React, { Component } from 'react';
import BarChart from '../components/BarChart';


class GraphicsContainer extends Component {

  state = {
    data: [],
    width: 700,
    height: 300,
    id: 'bar-chart'
  }
  // const forked = this.props.repos.map(repo => repo.forks_count);
  // const completed = this.props.repos.map(repo => repo.open_issues_count);
  // const incomplete = this.props.repos.map(repo => parseInt(repo.forks_count) - parseInt(repo.open_issues_count));

  // componentDidMount () {
  //   fetch("http://localhost:3000/data")
  //   .then(resp => resp.json())
  //   // .then(data => this.setState({ data: data }))
  //   .then(rep)
  // }

  render() { 
    return ( 
      <>
      <h1>Hi from the GraphicsContainer</h1>
      <BarChart repos = {this.props.repos} width={this.state.width} height={this.state.height}/>
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

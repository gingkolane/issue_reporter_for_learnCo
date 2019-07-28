import React, { Component } from 'react';
import TopNav from "./containers/TopNav";
import GraphicsContainer from "./containers/GraphicsContainer";
import Table from "./components/Table";

class AnalyticsPage extends Component {
  
  render() { 
    return ( 
      <>
        <h1>Hi from analytics page</h1>
        <TopNav/>
        <GraphicsContainer />
        <Table />
      </>
     );
  }
}
 
export default AnalyticsPage;
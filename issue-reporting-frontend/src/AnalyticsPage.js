import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react'
import TopNav from "./containers/TopNav";
import GraphicsContainer from "./containers/GraphicsContainer";
import AllReposTable from "./components/AllReposTable";

class AnalyticsPage extends Component {
  
  render() { 
    return ( 
      <>
        <TopNav/>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={16}>
              <GraphicsContainer />
            </Grid.Column>
            
            <Grid.Column width={16}>
              <AllReposTable />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </>
     );
  }
}
 
export default AnalyticsPage;
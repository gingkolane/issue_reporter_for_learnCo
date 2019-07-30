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
              <GraphicsContainer repos={this.props.repos} surveys={this.props.surveys}/>
              <Divider />
              </Grid.Column>
            
            <Grid.Column width={16}>
              <AllReposTable repos={this.props.repos} surveys={this.props.surveys}/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </>
     );
  }
}
 
export default AnalyticsPage;
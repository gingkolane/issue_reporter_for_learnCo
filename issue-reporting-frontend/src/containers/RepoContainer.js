import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'

class RepoContainer extends Component {

  state = {
    readme: {}
  }

  componentDidUpdate(){
    if (this.props.currentRepo.id) {
      console.log("this.props.currentRepo inside componentDidMount()", this.props.currentRepo)
      fetch(`https://api.github.com/repos/learn-co-students/${this.props.currentRepo.name}/readme`)
      .then(resp => resp.json())
      .then(readme => this.setState({ readme: readme }))
    }
  }

  render() { 
    // console.log("this.props.currentRepo in repoContainer", this.props.currentRepo)
    // this.fetchReadme()
    return(
      <>
        <Container textAlign='left'>
        <h2>{this.props.currentRepo.name}</h2> 
        <Divider />
        <p>{this.state.readme.content}</p>
        </Container>
      </>
    );
  }
}
 
export default RepoContainer;


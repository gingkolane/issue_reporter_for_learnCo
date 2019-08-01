import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'

class RepoContainer extends Component {
  
  // state = {
  //   readme: ''
  // }

  // componentDidMount() {
  //   debugger
  //   fetch(`https://api.github.com/repos/learn-co-students/${this.props.currentRepo.name}/readme`)
  //   .then(resp => resp.json())
  //   .then(readme => this.setState({ readme: readme }))
  //   .then(console.log)

  // }

  render() { 
    return(
      <>
        <Container textAlign='left'>
        <h2>{this.props.currentRepo.name}</h2> 
        <Divider />
        <p>{this.props.readme.content}</p>
        </Container>
      </>
    );
  }
}
 
export default RepoContainer;
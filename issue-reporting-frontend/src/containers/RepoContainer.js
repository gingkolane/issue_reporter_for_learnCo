import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'


class RepoContainer extends Component {
  
  state = {
    readme: ''
  }

  componentDidMount() {

    fetch("https://api.github.com/repos/learn-co-students/React-Stocks-dumbo-web-051319/readme")
    .then(resp => resp.json())
    .then(readme => this.setState({ readme: readme }))
  }

  render() { 
    console.log("this is this.state.readme.content in repoContainer before rendering", this.state.readme.content)
    const content = this.state.readme.content;
    const title = this.props.repo.name 
    // const decoded_content = atob(content)
    // console.log('this is decoded content', decoded_content);

    return(
      <>
        <Container textAlign='left'>
        <h2>{title}</h2> 
        <Divider />
        <p>{content}</p>
        </Container>
      </>
    );
  }
}
 
export default RepoContainer;
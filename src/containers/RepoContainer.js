import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'

class RepoContainer extends Component {

  state = {
    readme: {}
  }

  componentDidMount(){
    // if (this.props.currentRepo.id) {
    //   fetch(`https://api.github.com/repos/learn-co-students/${this.props.currentRepo.name}/readme`)
    //   .then(resp => resp.json())
    //   .then(readme => this.setState({ readme: readme }))
    // }
    fetch(`https://api.github.com/repos/learn-co-students/${this.props.currentRepo.name}/readme`)
    .then(resp => resp.json())
    .then(readme => this.setState({ readme: readme }))

  }

  render() { 
    // this.fetchReadme()

    const title = 
      <> 
      <h3> Issue Reporter for Learn.co </h3>
      <h4>
        -- A feature proposal for a student-driven issue reporting system to Flatiron School's learning platform
      </h4>
      </>

    const readme = 
      <div>
      <p> 
      This is the mod 3/4 project for my coding bootcamp in Flatiron School/Access Lab. It adds a survey interface to the existing learn.co platform which allows students to report bugs and offer fixes to the labs. The survey data was aggregated in an analytics dashboard for SECs and the engineering team, and issues will be automatically reported to the perspective github repo. This feature prioritizes tasks for the engineering team and allows quick fixes to these problems.
    </p>

<h4>Usage:</h4>
<p>A user can log in as either a student or a teacher. Student users and Teacher users go to two different pages.</p>

<h4>Student page:</h4>
<ul>
  <li>A user can browse through the web app with a navigation bar. </li>
  <li>The user can select a lab from the top nav bar, which shows up in the the main area.</li>
  <li>
  On clicking the next lesson on the right side nav bar, the student user will be prompted to a survey form.
  </li>
  <li>
  The user can answer and submit the survey.
  </li>
  <li>
  If the user provides a fix to the reported issue, they are awarded a karma point, which is reflected on the top nav.
  The survey and karma are updated in the database.
  </li>
</ul>


<h4>Teacher page: </h4>
<ul>

  <li>
    Once logged in, the user is presented a with a dashboard showing analysis of lab completion data.
  </li>
  <li>
    The user can use filters to interact with different graphs on the dashboard
  </li>
  <li>
    The user can click on the top nav and see the student view of the platform
  </li>
</ul>

<h4>Built With:</h4>

ReactJS - Frontend Framework
Ruby on Rails - Backend API
JWT for Ruby - JSON Web Token for Login/Signup encryption
PostgreSQL database
Github API/Octokit ruby gem for data acquisition
Semantic UI react - CSS framework
Tableau/Tableau-react - data visualization software

<h4>Credits:</h4>
<p>Numerous people in the Access Lab helped me with this project. These include our lead instructors Graham, Kevin and Eric, our cohort's coaches Lezil, Marzen, and my fellow classmates Daniella, Rachel, Joe, Fan. Their contributions are recorded in the git commits messages. I am grateful for everyone's help.</p>
</div>


    console.log('readme url', this.props.currentRepo)
    
    return(
      <>
        <Container textAlign='left'>
          <h2>{title}</h2> 
        <Divider />
          <p>{readme}</p>
        </Container>
      </>
    );
  }
}
 
export default RepoContainer;
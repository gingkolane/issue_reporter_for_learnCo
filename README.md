<h2>Issue reporter for Learn.co</h2>
<h3>Student-driven issue reporting system, a feature proposal to Flatiron School's teaching platform</h3>

This is my mod 4 project for Flatiron School/Access Lab. It adds a survey interface to the existing learn.co platform which allows students to report bugs and offer fixes to the labs. The survey data was aggregated in an analytics dashboard for SECs and the engineering team, and issues are automatically reported to the github repo. This feature prioritizes tasks for the engineering team and allows quick fixes to these problems. 

This is the student interface: 

This is the teacher interface:



Usage: 
A user can log in as either a student or a teacher. Student users and Teacher users go to two different pages. 

Student page: 
* A user can browse through the web app with a navigation bar. The user can select a lab from the top nav bar, which shows up in the the main area. 
* On clicking the next lesson on the right side nav bar, the student user will be prompted to a survey form. 
* The user can answer and submit the survey. 
* If the user provides a fix to the reported issue, they are awarded a karma point, which is reflected on the top nav. 
* The survey and karma are updated in the database. 

Teacher page:
* Once logged in, the user is presented a with a dashboard showing analysis of lab completion data. 
* The user can use filters to interact with different graphs on the dashboard
* The user can click on the top nav and see the student view of the platform

Built With:
  * ReactJS - Frontend Framework
  * Ruby on Rails - Backend API
  * JWT for Ruby - JSON Web Token for Login/Signup encryption
  * PostgreSQL database
  * Github API/Octokit ruby gem for data acquisition
  * Semantic UI react - CSS framework
  * Tableau/Tableau-react - data visualization software 

ToDos:
* Automatic submission of labs that have lower than 50% completion rate

Acknowledgements: 

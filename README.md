<h2>Issue reporter for Learn.co</h2>
<h3> - Student-driven issue reporting system, a feature proposal to Flatiron School's teaching platform </h3>

  This is my mod 4 project during my study in Flatiron School/Access Lab. It adds a survey interface to the existing learn.co platform to allow students' to report bugs and offer fixes in the labs. The survey data was aggregated in an analytics dashboard for SECs and engineering team, as well as automatically report issues to the github repo. The feature allows task prioritization for the engineering team as well as quick fix of these problems. 

This is the student interface: 

This is the teacher interface:



Usage: 
A user can login as either a student or a teacher. Student user or Teacher user goes to two different pages. 
student page: 
* A user can hen browse through the web app with a navigation bar. User can select lab from the top nav bar, which shows up in the the main area. 
* On click of next lesson on the right side nav bar. The student user will be prompt to a survey form. 
* User can answer and submit the survey. 
* If user provides fix to the reported issue, user is awarded a karma, which is reflected on the top nav. 
* The survey and karma are updated in the database. 

Teacher page:
* Once logged in, user is presented a dashboard with analysis of lab completion data. 
* User can use filter to interact with different graphs on the dashboard
* User can click on top nav and see the student view of the platform

Built With:
  * ReactJS - Frontend Framework
  * Ruby on Rails - Backend API
  * JWT for Ruby - JSON Web Token for Login/Signup encryption
  * PostgreSQL database
  * Github API/Octokit ruby gem for data acquisition
  * Semantic UI react - CSS framework
  * Tableau/Tableau-react - data visualization software 

ToDos:
  automatically issues submission to the labs that has lower than 50% completion rate

Acknowledgements: 

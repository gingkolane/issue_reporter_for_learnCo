<h3>Issue reporter for Learn.co</h3>
<h4> - A feature proposal for a student-driven issue reporting system to Flatiron School's learning platform</h4>

This project demoed adding a survey interface to the existing learn.co platform,  to allows students to report bugs and to offer fixes to the study labs. The survey data was aggregated in an analytics dashboard for SECs and the engineering team, and issues can potentially be automatically reported to the perspective github repo. This feature links the users of the learn.co platform with its development them, help them prioritize tasks and allows quick fixes to these problems. 

This is the mod 3/4 project for my coding bootcamp in Flatiron School/Access Lab. 

Usage:
<br/>
A user can log in as either a student or a teacher. Student users and Teacher users go to two different pages. 

Student page: 
* On login, a student avartar shows up, and this student's forked repos are updated on the top Nav. The user can select a study lab from     the top nav under React Labs.
* On clicking the "Next lesson" on the right side nav bar, the student user will be prompted to a survey form. 
* The user can answer and submit the survey. 
* If the user provides a fix to the reported issue, they are awarded a karma point, which is reflected on the top nav. 
* The survey and karma are updated in the database


Teacher page:
* Once logged in, the user is presented with a dashboard showing analysis of lab completion data. 
* Completion and survey data of study labs with less than 50% completion rate are detailed in the table below the data analytics graphics
* User can click to expand an repository and see the survey of each student submission
* The user can click on the top nav and navigate to the student view of the platform

Built With:
  * ReactJS - Frontend Framework
  * Ruby on Rails - Backend API
  * JWT for Ruby - JSON Web Token for Login/Signup encryption
  * PostgreSQL database
  * Github API/Octokit ruby gem for data acquisition
  * Semantic UI react - CSS framework
  * Tableau/Tableau-react - data visualization software
  * React-table package - a lightweight, fast and extendable datagrid built for React

ToDos:
* Automatic submission of labs that have lower than 50% completion rate

Credits: 
<br/>
Numerous people in the Flatiron School's Access Lab helped me with this project. These include our lead instructors Graham, Eric and Kevin, our cohort's coaches Leizl, Mazen and Greg, and my fellow classmates Fan, Daniela, Rachel and Joe. I am grateful for everyone's help.   

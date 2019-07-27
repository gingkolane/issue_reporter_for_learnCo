1. rails new issue-reporting-api --api --database=postgresql

2. create rails new git repo in github, clone to local

3. set up cors
  uncomement cors gem in gemfile, uncomment cors section in config/initializers/cors.rb, 
  https://learn.co/tracks/web-development-immersive-3-1-module-three/front-end-web-programming/rails-as-an-api/creating-a-rails-api-from-scratch

4. Additional gems
  - octokit for github api: in gemfile and config/application.rb
    https://github.com/octokit/octokit.rb

    <!-- Github API guide:
    https://developer.github.com/v3/ -->

5. create resource scaffold(note api only)

rails g scaffold repo github_repo_id:integer name full_name url html_url readme pulls_count:integer forks_count:integer network_count:integer parent source --no-test-framework

rails g scaffold user learnco_username learnco_password cohort github_user_id:integer login role karma avatar_url url html_url  repos_url --no-test-framework

rails g scaffold survey repo:references user:references completion_status incompleteReason issueType problemAnalysis suggestedFix --no-test-framework


6. create database and link data
  To use this backend run these commands:
  * `cd complimentor-api`
  * `bundle`
  * `rails db:create`
  * `rails db:migrate`
  <!-- * `rails db:seed` -->
  * `rails s`

7. create seed data in the navicat database
  https://api.github.com/search/users?q=octocat

------------------

Create front-end react app

1. npx create-react-app issue-reporting-frontend
2. Add "react-router-dom": "^5.0.1" below "react-dom" in package.json
3. npm install
4. rails server in -api/ npm start

front-end setup:
1. set up browserRouter in index.js


Notes:

1. add radio buttons choices
var radioButtons = document.getElementsByName("incompleteReason"); // nodeList

switch(radioButtons){
    case "A" :  // Woot, string !

       // stuff

    case "B" :

    case "C" :

    case "D":

}

CSRF and fetch
https://samuelmullen.com/articles/csrf-protection-and-ruby-on-rails/
in headers:
      // 'X-Requested-With': 'XMLHttpRequest',
      // 'X-CSRF-Token': token
      // 'X-CSRF-Token': 'csrfToken'
      // 'X-CSRF-Token': Rails.csrfToken()
      // 'X-CSRF-Token': 'test_post_action_token'

          // <input type="hidden" id="repo_id" name="repo_id" value=${repo_id}>
    // <input type="hidden" id="user_id" name="user_id" value=${user_id}>


 module--flush 


related repo information I need: 


 "pulls_url": "http://api.github.com/repos/octocat/Hello-World/
 
 
 pulls{/number}"

 repo url

 id:
 name: 
 full_name:
 url:

readme: /blob/master/README.md
 forks_count: 
//how many forked this repo:
network_count: 
//how many completed
pulls_count: 

parent:
source: 



 forks_url: 
 issues_url: 
 issue_comment_url:
 has_issues:
 open_issues_count
 pulls_url:


  network_count: 

  members_url



 parent:
 source: 

parent_url: 
https://api.github.com/learn-co-students/react-props-movie-lab


https://api.github.com/repos/learn-co-students/react-components-as-routes-dumbo-web-051319
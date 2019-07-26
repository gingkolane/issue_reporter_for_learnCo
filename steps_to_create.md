1. rails new issue-reporting-api --api --database=postgresql

2. upload the git repo in github, add .gitignore

3. Follow instructions on learn.co to create a rails api backend

  https://learn.co/tracks/web-development-immersive-3-1-module-three/front-end-web-programming/rails-as-an-api/creating-a-rails-api-from-scratch

  (update on cors from above: the file to modify is in config/initializers/cors.rb)

4. Additional gems
  - octokit for github api: in gemfile and config/application.rb
    https://github.com/octokit/octokit.rb

    <!-- Github API guide:
    https://developer.github.com/v3/ -->

5. create resource scaffold(note api only)

rails g scaffold repo name github_repo_id:integer name full_name url html_url read_me pulls_count:integer forks_count:integer network_count:integer parent source --no-test-framework

rails g scaffold user github_user_id:integer login role karma avatar_url url html_url  repos_url --no-test-framework

rails g scaffold survey repo:references user:references completion_status incompleteReason
issueType problemAnalysis suggestedFix --no-test-framework


6. create database and link data
  To use this backend run these commands:
  * `cd complimentor-api`
  * `bundle`
  * `rails db:create`
  * `rails db:migrate`
  * `rails db:seed`
  * `rails s`

7. copy and paste data in the navicat database
  https://api.github.com/search/users?q=octocat

8. Take bookliker index.html for MVP

9. To-do list for index.js

Lab views
<!-- 1. show repo title in list-panel -->
<!-- 2. show single repo view in show-panel -->

Completion
3. form for completion status (create)
4. Change incomplete to complete


Overall completion on this lab

10. update field name in completion table

rails g migration AddColumnsToCompletion incompleteReason issueType problemAnalysis suggestedFix status:integer

rails g migration AddColumnsToUser karma:integer

11. Manually add data to three tables in Navicat.




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


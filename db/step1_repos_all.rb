require 'octokit'

Repo.destroy_all

# ------- create Octokit client with github username and pasword ------
# client = Octokit::Client.new(:access_token => '66da52aacd4c4ec69957ffc586cec8a335f4d4b8')
# if you push repo to github, github will deactivate access_token
# so I will use username and password
client = Octokit::Client.new(:login => 'learnCoStudentReporter', :password => 'Reporter051319')

# learn-co-student has 170,000 repos. Github set limit on how many repos one can download each time, 
# To get all so many repos, we first get the total number of pages, each page 100
# Then we acquire data one page at a time


# get the page number for the last page
repos=client.repos('learn-co-students', per_page: 100)
last_response = repos.last_response
url_last_response = last_response.rels[:last].href
number_of_pages = url_last_response.split("=")[-1].to_i

# get one page at a time using for loop
for i in 1..number_of_pages do  
  repos=client.repos('learn-co-students', page:i, per_page: 100)
  repos.each do |repo|
    # Repo.create write the repo data into the repos_all data tables
    Repo.create(github_repo_id: repo.id, name: repo.name, forks_count: repo.forks_count, open_issues_count: repo.open_issues_count, parent: repo.parent, source: repo.source, forks_url: repo.forks_url )
 end 
end 


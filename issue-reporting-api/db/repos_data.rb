
require 'octokit'

client = Octokit::Client.new(:login => 'learnCoStudentReporter', :password => 'Reporter051319')

# # fill in forks_url in repos table
# for i in 1..1738 do  

#   repos=client.repos('learn-co-students', page:i, per_page: 100)
#   repos.each do |repo|
#     repo.update(forks_url: repo.forks_url )
#   end 

# end 

# dumbo_repos's forks, our students are the owner of these forks
repos=client.repos('learn-co-students')
dumbo_repos = repos.where('name LIKE ?', 'dumbo-web%').where.not('name LIKE ?', '%plan')

dumbo_repos.each do |repo|
  forks_for_the_repo = Octokit.forks(repo.github_repo_id)

  forks_for_the_repo.each do |fork|

    User.create(github_user_id: fork.owner.id, login: fork.owner.login, role: 'student', karma: 0, avatar_url: fork.owner.avatar_url, cohort: fork.name)
  end 
end 

# Octokit.forks('learn-co-students/dumbo-web-010719')

# user.update(name: fork.owner.login, github_user_id: fork.owner.id, avatar_url: fork.owner.avatar_url
   
#   forks_url, type: "cohort_main") 
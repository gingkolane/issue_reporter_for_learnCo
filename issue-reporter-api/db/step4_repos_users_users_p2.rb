
# # repos_users_users_p1 acquired repos from beginning to id= 107397, 
# it was stopped because it exceeds the user limit. "too many requests from the user" 
# user a new user to pick up the data acquisition from the last id

require 'octokit'


client = Octokit::Client.new(:login => 'xxxxx', :password => 'yyyy')

# filter for repo_id > 107397
part_two = Repo.where("id > ?", 107397) 

part_two.each do |repo|
  # check if repository exist
  if client.repository?(repo.github_repo_id)
    # get the forks for the repo
    repo_forks = client.forks(repo.github_repo_id)

    repo_forks.each do |fork|
      # create reposUser data in repos_users table
      ReposUser.create(repo_name:repo.name, github_username:fork.owner.login)
      
      # create user if not exist  
      if User.find_by(username: fork.owner.login).nil? 
        User.create(username: fork.owner.login, password_digest: "$2a$12$PU3/1qCSoIMlKp26LYv8Z.qNySrPkYPSKxi7ywwo39rZBbgcCNw8K", role:'student', karma: 0, avatar_url: fork.owner.avatar_url, cohort_name: fork.name.split('-dumbo-')[1])
      end
    end 
  end 
end 

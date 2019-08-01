
Survey.destroy_all
User.destroy_all
Repo.destroy_all

client = Octokit::Client.new(:access_token => 'eeae13544e7e1690311ed39afd7ed2c8ccb98916')
# repos = client.org_repos('learn-co-students')
# users = client.org_public_members('learn-co-students', per_page: 1000)

# Get all the repos of the organization learn-co-students
# repos = Octokit.all_repositories('learn-co-students')
repos = Octokit.repos('learn-co-students', per_page: 1000)
filtered_repos = repos.select {|repo| repo[:forks_count] > 10}
filtered_repos.each do |repo|
  Repo.create(github_repo_id: repo.id, name: repo.name, forks_count: repo.forks_count, open_issues_count: repo.open_issues_count, parent: repo.parent, source: repo.source )
end

# # -----------


# Get all the members of learn-co-students organization
users = Octokit.org_public_members('learn-co-students', per_page: 1000)

users.each do |user|
  User.create(github_user_id: user.id, login: user.login, role: 'student', avatar_url: user.avatar_url )
end

# ---------------------


repo_collect = Repo.take(100)
user_collect = User.take(100)
option1 = ['A', 'B', 'C']
option2 = [0, 1]

500.times do 
  Survey.create(repo_id: repo_collect.sample.id, user_id: user_collect.sample.id, completion_status: option2.sample, incompleteReason: option1.sample, issueType: option1.sample )
end 

# require 'octokit'

client = Octokit::Client.new(:access_token => '4b6614de92eab254a0eda26502f17f7c2f2b937b')

repos=client.repos('learn-co-students', per_page: 100)
total_count = repos.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end




# require 'octokit'

# # !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# # Instead, set and test environment variables, like below
# # client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
# client = Octokit::Client.new(:access_token => '4b6614de92eab254a0eda26502f17f7c2f2b937b' )

# client.auto_paginate = true


# Survey.destroy_all
# User.destroy_all
# Repo.destroy_all


# # repos = client.org_repos('learn-co-students')
# # users = client.org_public_members('learn-co-students', per_page: 1000)

# # Get all the repos of the organization learn-co-students
# # repos = Octokit.all_repositories('learn-co-students')
# repos = Octokit.repos('learn-co-students', per_page: 1000)
# filtered_repos = repos.select {|repo| repo[:forks_count] > 10}
# filtered_repos.each do |repo|
#   Repo.create(github_repo_id: repo.id, name: repo.name, forks_count: repo.forks_count, open_issues_count: repo.open_issues_count, parent: repo.parent, source: repo.source )
# end

# # # -----------


# # Get all the members of learn-co-students organization
# users = Octokit.org_public_members('learn-co-students', per_page: 1000)
# byebug

# users.each do |user|
#   User.create(github_user_id: user.id, login: user.login, role: 'student', avatar_url: user.avatar_url )
# end

# # ---------------------


# repo_collect = Repo.take(100)
# user_collect = User.take(100)
# option1 = ['A', 'B', 'C']
# option2 = [0, 1]

# 500.times do 
#   Survey.create(repo_id: repo_collect.sample.id, user_id: user_collect.sample.id, completion_status: option2.sample, incompleteReason: option1.sample, issueType: option1.sample )
# end 

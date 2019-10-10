# This code acquire repo, user and repos_user data for Access Lab's classes

# We filter for repo name include dumbo-web, and forks_count between 5 and 50
# select count (*) from repos_all where 
# repos_all.name like '%dumbo%' AND repos_all.forks_count between 5 AND 50;
# for users, we acquired used who has forked these repos
# we create joint table to link uses and their repos

# require 'octokit'

#create Octokit client, Octokit method can be called either on a client instance or Octokit
# client = Octokit::Client.new(:access_token => '66da52aacd4c4ec69957ffc586cec8a335f4d4b8')
# if you push repo to github, github will deactivate access_token
# so I will use username and password
# client = Octokit::Client.new(:login => 'learnCoStudentReporter', :password => 'Reporter051319')

# This part was done first seperately==================================
# Repo.destroy_all
# # learn-co-student has 170,000 repos. Github set limit on how many repos one can download each time, 
# # To get all so many repos, we first get the total number of pages, each page 100
# # Then we acquire data one page at a time

# # get the page number for the last page
# repos_all = client.repos('learn-co-students', per_page: 100)
# last_response = client.last_response
# url_last_response = last_response.rels[:last].href
# number_of_pages = url_last_response.split("=")[-1].to_i

# # get one page at a time using for loop
# for i in 1..number_of_pages do  
#   repos_all=client.repos('learn-co-students', page:i, per_page: 100)
#   repos.each do |repo|
#     # Repo.create write the repo data into the repos_all data tables
#     Repo.create(github_repo_id: repo.id, name: repo.name, forks_count: repo.forks_count, open_issues_count: repo.open_issues_count, parent: repo.parent, source: repo.source, forks_url: repo.forks_url )
#  end 
# end 
#===============================================================================

# User.destroy_all
# ReposUser.destroy_all
# 107397, 173501
# Repo.all.each do |repo|
#   # check if repository exist
#   if client.repository?(repo.github_repo_id)
#     # get the forks for the repo
#     repo_forks = client.forks(repo.github_repo_id)

#     repo_forks.each do |fork|
#       # create reposUser data in repos_users table
#       ReposUser.create(repo_name:repo.name, github_username:fork.owner.login)
      
#       # create user if not exist  
#       if User.find_by(username: fork.owner.login).nil? 
#         User.create(username: fork.owner.login, password_digest: "$2a$12$PU3/1qCSoIMlKp26LYv8Z.qNySrPkYPSKxi7ywwo39rZBbgcCNw8K", role:'student', karma: 0, avatar_url: fork.owner.avatar_url, cohort_name: fork.name.split('-dumbo-')[1])
#       end
#     end 
#   end 
# end 
# # Above code acquired repos from beginning to id= 107397, it is stopped because it exceeds the user limit. 
#################################################################

# client = Octokit::Client.new(:login => 'gingkolane', :password => 'Fisheggs22!')

# # filter for repo_id > 107397
# part_two = Repo.where("id > ?", 107397) 

# part_two.each do |repo|
#   # check if repository exist
#   if client.repository?(repo.github_repo_id)
#     # get the forks for the repo
#     repo_forks = client.forks(repo.github_repo_id)

#     repo_forks.each do |fork|
#       # create reposUser data in repos_users table
#       ReposUser.create(repo_name:repo.name, github_username:fork.owner.login)
      
#       # create user if not exist  
#       if User.find_by(username: fork.owner.login).nil? 
#         User.create(username: fork.owner.login, password_digest: "$2a$12$PU3/1qCSoIMlKp26LYv8Z.qNySrPkYPSKxi7ywwo39rZBbgcCNw8K", role:'student', karma: 0, avatar_url: fork.owner.avatar_url, cohort_name: fork.name.split('-dumbo-')[1])
#       end
#     end 
#   end 
# end 

# ======================
# Notes and References:


# related github api methods
# List user repositories (repo instance method)
# https://developer.github.com/v3/search/#search-repositories
# https://www.rubydoc.info/github/pengwynn/octokit/Octokit/Client/Repositories#repositories-instance_method
# https://octokit.github.io/octokit.rb/Octokit/Client/Repositories.html#repositories-instance_method

# forks: 
# https://www.rubydoc.info/github/pengwynn/octokit/Octokit/Client/Repositories#forks-instance_method

# About pagination
# https://developer.github.com/v3/guides/traversing-with-pagination/
# client.auto_paginate = true

# Octokit search 
# https://octokit.github.io/octokit.rb/Octokit/Client/Search.html
# https://developer.github.com/v3/search/#constructing-a-search-query



    #       # get the forks of this repo
    # repo_forks = client.forks(repo.github_repo_id, per_page: 100 ).last_response
    # byebug
    # # get the page number for the last page
    # # last_response = repo_forks.last_response
    # # byebug
    # url_last_response = last_response.rels[:last].href
    # number_of_pages = url_last_response.split("=")[-1].to_i

    # # get one page at a time using for loop
    # for i in 1..number_of_pages do  
    #   repo_forks = client.forks(repo.github_repo_id, page:i, per_page: 100 )
    #   repo_forks.each do |fork|
    #     # create reposUser data in repos_users table
    #     ReposUser.create(repo_name:repo.name, github_username:fork.owner.login)
    #     byebug
    #     # create user if not exist  
    #     if User.find_by(username: fork.owner.login).nil? 
    #       User.create(username: fork.owner.login, password_digest: "$2a$12$PU3/1qCSoIMlKp26LYv8Z.qNySrPkYPSKxi7ywwo39rZBbgcCNw8K", role:'student', karma: 0, avatar_url: fork.owner.avatar_url, cohort_name: fork.name.split('-dumbo-')[1])
    #     end
    #   end 
    # end
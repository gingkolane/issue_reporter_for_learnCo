require 'octokit'
require 'byebug'

# client = Octokit::Client.new(:access_token => '4b6614de92eab254a0eda26502f17f7c2f2b937b')
client = Octokit::Client.new(:login => 'learnCoStudentReporter', :password => 'Reporter051319')

repos=client.repos('learn-co-students', per_page: 100)
total_count = repos.count

last_response = client.last_response
url_last_response = last_response.rels[:last].href
# "https://api.github.com/user/8825476/repos?per_page=1000&page=1738"
number_of_pages = url_last_response.split("=")[-1].to_i
# 1738

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

repos=client.repos('learn-co-students', per_page: 100)
repos.each do |repo|
  Repo.create(github_repo_id: repo.id, name: repo.name, forks_count: repo.forks_count, open_issues_count: repo.open_issues_count, parent: repo.parent, source: repo.source )
end 

for i in 1..5 do 
  # next_repos = repos.concat client.last_response.rels[:next].get.data
  next_repos = client.last_response.rels[:next].get.data
  next_repos.each do |repo|
    Repo.create(github_repo_id: repo.id, name: repo.name, forks_count: repo.forks_count, open_issues_count: repo.open_issues_count, parent: repo.parent, source: repo.source )
  end


end

puts "Done!"
puts "repos' count is #{repos.count}"

# # puts last_response.data.items.first.path
# puts last_response.data.first.name
# until last_response.rels[:next].nil?
#   last_response = last_response.rels[:next].get
#   puts last_response.data.itemsfirst.path
# end

# issues = client.issues 'rails/rails'
# # issues.concat client.last_response.rels[:next].get.data
# puts "#{issues.count}"
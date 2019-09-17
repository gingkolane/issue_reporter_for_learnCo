
require 'octokit'

User.destroy_all

client = Octokit::Client.new(:login => 'learnCoStudentReporter', :password => 'Reporter051319')

select * from repos where name like 'dumbo-web%' and name not like '%plan'


dumborepos.select(select * from repos where name like 'dumbo-web%' and name not like '%plan'

  # .Where(x => x.Title.Contains("Git"))
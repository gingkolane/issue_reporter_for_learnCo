# to run this file, first go into rails console, then do:
# load 'db/step6_survey_creation.rb'

Survey.destroy_all

# select all the repos from one user
my_repos_users = ReposUser.where(user_id: 24)

answer_incompleteReason = ['A', 'B', 'C', 'D']
answer_issueType = ['A', 'B', 'C']

my_repos_users.each do |repos_users|

  Survey.create(
    repos_user_id: repos_users.id, 
    completion_status: 0, 
    incompleteReason: answer_incompleteReason.sample, 
    issueType: answer_issueType.sample,
    problemAnalysis: '',
    suggestedFix: ''
  )
end 

Survey.all.each do |survey| 

  # fill in text fields if corresponding choices selected
  if survey.issueType == 'B'
    Survey.update(survey.id, problemAnalysis: "I think this is the problem ...")
  elsif survey.issueType == 'C'
    Survey.update(survey.id, suggestedFix: "my suggested fix is ...")
    # increase karma count if suggestedFix is filled out
    User.update(survey.user.id, karma: survey.user.increment(:karma))
  else 
    next
  end

end 
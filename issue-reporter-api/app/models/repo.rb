class Repo < ApplicationRecord
  
  has_many :repos_users
  has_many :users, through: :repos_users
  has_many :surveys, through: :repos_users

  def get_one_repo
    client = Octokit::Client.new(:access_token => 'eeae13544e7e1690311ed39afd7ed2c8ccb98916')
    repo = Repo.find(params[:id])
    repo = client.repo "learn-co-students/#{repo.name}"
  end

  def issues 
    issues = client.issues "learn-co-students/#{repo.name}"
  end


  def update_survey_result_in_repo 

    count_a = self.surveys.where(incompleteReason: "A").count
    count_b = self.surveys.where(incompleteReason: "B").count
    count_c = self.surveys.where(incompleteReason: "C").count
    count_d = self.surveys.where(incompleteReason: "D").count

    self.update(
      "reason_a": count_a,
      "reason_b": count_b,
      "reason_c": count_c,
      "reason_d": count_d
    )
  end 


end




class Repo < ApplicationRecord
  has_many :surveys
  has_many :users, through: :surveys

  # def get_one_repo
  #   client = Octokit::Client.new(:access_token => 'eeae13544e7e1690311ed39afd7ed2c8ccb98916')
  #   repo = Repo.find(params[:id])
  #   repo = client.repo "learn-co-students/#{repo.name}"
  # end

  def issues 
    issues = client.issues "learn-co-students/#{repo.name}"
  end


  def incomplete_reason_count
    hash = Hash.new(0)

    repo.surveys.each do |survey|
      hash[survey.incompleteReason] += 1
    end 

  end 

end




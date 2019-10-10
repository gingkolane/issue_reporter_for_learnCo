class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def client
    Octokit::Client.new(:access_token => 'eeae13544e7e1690311ed39afd7ed2c8ccb98916')
  end
end

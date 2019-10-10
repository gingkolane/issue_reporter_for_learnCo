class Survey < ApplicationRecord
  
  belongs_to :repos_user
  delegate :user, :to => :repos_user, :allow_nil => true
  delegate :repo, :to => :repos_user, :allow_nil => true

end


# https://stackoverflow.com/questions/4021322/belongs-to-through-associations
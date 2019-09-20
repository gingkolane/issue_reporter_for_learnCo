class User < ApplicationRecord
  has_secure_password
  
  has_many :surveys
  has_many :repos, through: :surveys
end

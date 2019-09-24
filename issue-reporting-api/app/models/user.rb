class User < ApplicationRecord
  has_secure_password

  has_many :repos_users
  has_many :repos, through: :repos_users
  has_many :surveys, through: :repos_users

end

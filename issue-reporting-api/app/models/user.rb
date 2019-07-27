class User < ApplicationRecord
  has_many :surveys
  has_many :repos, through: :surveys
end

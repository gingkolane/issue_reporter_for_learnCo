class Repo < ApplicationRecord
  has_many :surveys
  has_many :users, through: :surveys
end

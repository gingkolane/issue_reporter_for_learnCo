class ReposUser < ApplicationRecord
  belongs_to :repo
  belongs_to :user
  has_one :survey
end

class Team < ApplicationRecord
  belongs_to :account
  has_many :users
end

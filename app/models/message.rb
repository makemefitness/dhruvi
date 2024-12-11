class Message < ApplicationRecord
  belongs_to :user
  belongs_to :customer

  validates :content, presence: true
end

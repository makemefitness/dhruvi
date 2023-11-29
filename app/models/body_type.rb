class BodyType < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :neat, presence: true
  validates :description, presence: true
end

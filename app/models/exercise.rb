class Exercise < ApplicationRecord
  belongs_to :equipment
  belongs_to :body_part
  belongs_to :target
  has_many :tasks
  has_many :customers, through: :tasks
  
  has_one_attached :gif do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end

  validates :name, uniqueness: true
end

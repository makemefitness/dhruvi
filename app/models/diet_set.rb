class DietSet < ApplicationRecord
  belongs_to :customer
  has_many :customer_recipes, dependent: :destroy
  has_many :customer_diets, through: :customer_recipes
  
  accepts_nested_attributes_for :customer_recipes, reject_if: :all_blank, allow_destroy: true
end

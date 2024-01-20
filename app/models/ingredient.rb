class Ingredient < ApplicationRecord
  has_many :recipe_ingredients
  has_many :recipes, through: :recipe_ingredients
  has_many :customer_diets
  has_many :customer_recipes, through: :customer_diets
  belongs_to :ingredients_categories, optional: true

  def self.ransackable_attributes(auth_object = nil)
    ["carbohydrate", "energy", "fat", "id", "id_value", "name", "protein"]
  end 
end

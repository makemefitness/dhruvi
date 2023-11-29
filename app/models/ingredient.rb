class Ingredient < ApplicationRecord
  has_many :recipe_ingredients
  has_many :recipes, through: :recipe_ingredients

  def self.ransackable_attributes(auth_object = nil)
    ["carbohydrate", "energy", "fat", "id", "id_value", "name", "protein"]
  end 
end

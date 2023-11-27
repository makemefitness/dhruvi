class Ingredient < ApplicationRecord

  def self.ransackable_attributes(auth_object = nil)
    ["carbohydrate", "energy", "fat", "id", "id_value", "name", "protein"]
  end 
end

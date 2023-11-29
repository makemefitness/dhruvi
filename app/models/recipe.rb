class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  accepts_nested_attributes_for :recipe_ingredients, reject_if: :all_blank, allow_destroy: true

  has_one_attached :photo do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end
  has_rich_text :description


  def self.ransackable_attributes(auth_object = nil)
    ["created_at", "id", "id_value", "ingredients", "link", "name", "preparation", "summary", "updated_at"]
  end

  def ingredients_summary
    summary = {energy: 0, protein: 0, fat: 0, carbohydrate: 0}
    tmp_energy = 0
    tmp_protein = 0
    tmp_fat = 0
    tmp_carbohydrate = 0
    self.recipe_ingredients.each do |el|
      tmp_energy += el.energy
      tmp_protein += el.protein
      tmp_fat += el.fat
      tmp_carbohydrate += el.carbohydrate
    end
    summary[:energy] = tmp_energy
    summary[:protein] = tmp_protein
    summary[:fat] = tmp_fat
    summary[:carbohydrate] = tmp_carbohydrate
    return summary
  end
end

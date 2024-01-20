class CustomerRecipe < ApplicationRecord
  belongs_to :recipe
  has_many :customer_diets
  has_many :ingredients, through: :customer_diets
  accepts_nested_attributes_for :customer_diets, reject_if: :all_blank, allow_destroy: true
  belongs_to :diet_set

  def recipe_name
    recipe_id.try(:name)
  end

  def recipe_name=(name)
    self.recipe_id = Recipe.find_or_create_by(name: name) if name.present?
  end

  def summary
    summary = {energy: 0, protein: 0, fat: 0, carbohydrate: 0}
    self.customer_diets.each do |ingredient|
      summary[:energy] += ingredient.energy.round(0)
      summary[:protein] += ingredient.protein.round(0)
      summary[:fat] += ingredient.fat.round(0)
      summary[:carbohydrate] += ingredient.carbohydrate.round(0)
    end
    "energy #{summary[:energy]} protein #{summary[:protein]} fat #{summary[:fat]} carbohydrate #{summary[:carbohydrate]} "
  end
end

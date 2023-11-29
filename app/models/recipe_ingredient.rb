class RecipeIngredient < ApplicationRecord
  attr_accessor :ingredient_name
  validates :amount, :numericality => {:only_integer => true}
  belongs_to :recipe
  belongs_to :ingredient

  def ingredient_name
    Ingredient.try(:name)
  end

  def ingredient_name=(name)
    self.ingredient = Ingredient.find_or_create_by(name: name) if name.present?
  end

  def energy
    (self.amount/100.to_f)*(self.ingredient.energy).to_f
  end
  def protein
    (self.amount/100.to_f)*(self.ingredient.protein).to_f
  end
  def fat
    (self.amount/100.to_f)*(self.ingredient.fat.to_f).to_f
  end
  def carbohydrate
    (self.amount/100.to_f)*(self.ingredient.carbohydrate).to_f
  end
end

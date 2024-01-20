class CustomerDiet < ApplicationRecord
  attr_accessor :ingredient_name

  belongs_to :customer_recipe
  belongs_to :ingredient

  def ingredient_name
    Ingredient.try(:name)
  end

  def ingredient_name=(name)
    self.ingredient = Ingredient.find_or_create_by(name: name) if name.present?
  end

  def recipe_name
    recipe.try(:name)
  end

  def recipe_name=(name)
    self.recipe = Recipe.find_or_create_by(name: name) if name.present?
  end

  def energy
    if self.amount.present? && self.ingredient.present?
      (self.amount/100.to_f)*(self.ingredient.energy).to_f
    else
      0
    end
  end
  def protein
    if self.amount.present? && self.ingredient.present? 
      (self.amount/100.to_f)*(self.ingredient.protein).to_f
    else
      0
    end
  end
  def fat
    if self.amount.present? && self.ingredient.present?
      (self.amount/100.to_f)*(self.ingredient.fat.to_f).to_f
    else
      0
    end
  end
  def carbohydrate
    if self.amount.present? && self.ingredient.present?
      (self.amount/100.to_f)*(self.ingredient.carbohydrate).to_f
    else
      0
    end
  end
end

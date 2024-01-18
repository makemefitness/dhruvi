class AddIngredientCategoryToIngredient < ActiveRecord::Migration[7.1]
  def change
    add_reference :ingredients, :ingredient_category, foreign_key: true
  end
end

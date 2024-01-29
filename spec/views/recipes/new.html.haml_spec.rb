require 'rails_helper'

RSpec.describe "recipes/new", type: :view do
  let(:ingredients) { create_list(:ingredient, 10) }
  let(:recipe) { create :recipe }

  it "renders new recipe form" do
    @recipe = Recipe.new 
    render

    assert_select "form[action=?][method=?]", recipes_path, "post" do

      assert_select "input[name=?]", "recipe[photo]"

      assert_select "input[name=?]", "recipe[name]"

      # assert_select "input[name=?]", "recipe[recipe_ingredients_attributes][0][ingredient_id]"

      # assert_select "textarea[name=?]", "recipe[preparation]"

      assert_select "input[name=?]", "recipe[summary]"

      assert_select "input[name=?]", "recipe[link]"
    end
  end
end

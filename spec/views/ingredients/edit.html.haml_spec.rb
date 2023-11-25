require 'rails_helper'

RSpec.describe "ingredients/edit", type: :view do
  let(:ingredient) {
    Ingredient.create!(
      name: "MyString",
      energy: 1,
      protein: 1,
      fat: 1,
      carbohydrate: 1
    )
  }

  before(:each) do
    assign(:ingredient, ingredient)
  end

  it "renders the edit ingredient form" do
    render

    assert_select "form[action=?][method=?]", ingredient_path(ingredient), "post" do

      assert_select "input[name=?]", "ingredient[name]"

      assert_select "input[name=?]", "ingredient[energy]"

      assert_select "input[name=?]", "ingredient[protein]"

      assert_select "input[name=?]", "ingredient[fat]"

      assert_select "input[name=?]", "ingredient[carbohydrate]"
    end
  end
end

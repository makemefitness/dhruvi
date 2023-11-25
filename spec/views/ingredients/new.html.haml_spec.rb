require 'rails_helper'

RSpec.describe "ingredients/new", type: :view do
  before(:each) do
    assign(:ingredient, Ingredient.new(
      name: "MyString",
      energy: 1,
      protein: 1,
      fat: 1,
      carbohydrate: 1
    ))
  end

  it "renders new ingredient form" do
    render

    assert_select "form[action=?][method=?]", ingredients_path, "post" do

      assert_select "input[name=?]", "ingredient[name]"

      assert_select "input[name=?]", "ingredient[energy]"

      assert_select "input[name=?]", "ingredient[protein]"

      assert_select "input[name=?]", "ingredient[fat]"

      assert_select "input[name=?]", "ingredient[carbohydrate]"
    end
  end
end

require 'rails_helper'

RSpec.describe "recipes/new", type: :view do
  before(:each) do
    assign(:recipe, Recipe.new(
      photo: nil,
      name: "MyString",
      ingredients: "MyString",
      preparation: "MyText",
      summary: "MyString",
      link: "MyString"
    ))
  end

  it "renders new recipe form" do
    render

    assert_select "form[action=?][method=?]", recipes_path, "post" do

      assert_select "input[name=?]", "recipe[photo]"

      assert_select "input[name=?]", "recipe[name]"

      assert_select "input[name=?]", "recipe[ingredients]"

      assert_select "textarea[name=?]", "recipe[preparation]"

      assert_select "input[name=?]", "recipe[summary]"

      assert_select "input[name=?]", "recipe[link]"
    end
  end
end

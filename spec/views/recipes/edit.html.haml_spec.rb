require 'rails_helper'

RSpec.describe "recipes/edit", type: :view do
  let(:recipe) {
    Recipe.create!(
      photo: nil,
      name: "MyString",
      ingredients: "MyString",
      preparation: "MyText",
      summary: "MyString",
      link: "MyString"
    )
  }

  before(:each) do
    assign(:recipe, recipe)
  end

  it "renders the edit recipe form" do
    render

    assert_select "form[action=?][method=?]", recipe_path(recipe), "post" do

      assert_select "input[name=?]", "recipe[photo]"

      assert_select "input[name=?]", "recipe[name]"

      assert_select "input[name=?]", "recipe[ingredients]"

      assert_select "textarea[name=?]", "recipe[preparation]"

      assert_select "input[name=?]", "recipe[summary]"

      assert_select "input[name=?]", "recipe[link]"
    end
  end
end

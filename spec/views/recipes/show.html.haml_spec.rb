require 'rails_helper'

RSpec.describe "recipes/show", type: :view do
  before(:each) do
    assign(:recipe, Recipe.create!(
      photo: nil,
      name: "Name",
      ingredients: "Ingredients",
      preparation: "MyText",
      summary: "Summary",
      link: "Link"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Ingredients/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/Summary/)
    expect(rendered).to match(/Link/)
  end
end

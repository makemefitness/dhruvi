require 'rails_helper'

RSpec.describe "ingredients/show", type: :view do
  before(:each) do
    assign(:ingredient, Ingredient.create!(
      name: "Name",
      energy: 2,
      protein: 3,
      fat: 4,
      carbohydrate: 5
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
    expect(rendered).to match(/5/)
  end
end

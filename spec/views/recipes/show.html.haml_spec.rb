require 'rails_helper'

RSpec.describe "recipes/show", type: :view do
  let(:ingredients) { create_list(:ingredient, 10) }
  let(:recipe) { build :recipe, ingredients: ingredients }

  it "renders attributes in <p>" do
    render recipe
    expect(rendered).to match(//)
    expect(rendered).to match(/name/)
    expect(rendered).to match(/ingredients/)
    expect(rendered).to match(/summary/)
    expect(rendered).to match(/link/)
  end
end

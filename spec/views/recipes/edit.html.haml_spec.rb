require 'rails_helper'

RSpec.describe 'recipes/edit', type: :view do
  let(:ingredients) { create_list(:ingredient, 10) }
  let(:recipe) { create :recipe }

  it 'renders edit recipe form' do
    @recipe = recipe
    # visit "recipes/#{recipe.id}/edit"
    render

    assert_select 'form[action=?][method=?]', "/recipes/#{recipe.id}", 'post' do

      assert_select 'input[name=?]', 'recipe[photo]'

      assert_select 'input[name=?]', 'recipe[name]'

      assert_select 'input[name=?]', 'recipe[summary]'

      assert_select 'input[name=?]', 'recipe[link]'
    end
  end
end

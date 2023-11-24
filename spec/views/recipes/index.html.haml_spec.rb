require 'rails_helper'

RSpec.describe "recipes/index", type: :view do
  before(:each) do
    assign(:recipes, [
      Recipe.create!(
        photo: nil,
        name: "Name",
        ingredients: "Ingredients",
        preparation: "MyText",
        summary: "Summary",
        link: "Link"
      ),
      Recipe.create!(
        photo: nil,
        name: "Name",
        ingredients: "Ingredients",
        preparation: "MyText",
        summary: "Summary",
        link: "Link"
      )
    ])
  end

  it "renders a list of recipes" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Ingredients".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("MyText".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Summary".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Link".to_s), count: 2
  end
end

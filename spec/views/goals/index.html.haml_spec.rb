require 'rails_helper'

RSpec.describe "goals/index", type: :view do
  before(:each) do
    assign(:goals, [
      Goal.create!(
        name: "Name",
        description: "Description"
      ),
      Goal.create!(
        name: "Name",
        description: "Description"
      )
    ])
  end

  it "renders a list of goals" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'tr>td' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Description".to_s), count: 2
  end
end

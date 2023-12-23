require 'rails_helper'

RSpec.describe "goals/edit", type: :view do
  let(:goal) {
    Goal.create!(
      name: "MyString",
      description: "MyString"
    )
  }

  before(:each) do
    assign(:goal, goal)
  end

  it "renders the edit goal form" do
    render

    assert_select "form[action=?][method=?]", goal_path(goal), "post" do

      assert_select "input[name=?]", "goal[name]"

      assert_select "input[name=?]", "goal[description]"
    end
  end
end

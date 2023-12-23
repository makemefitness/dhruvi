require 'rails_helper'

RSpec.describe "habits/edit", type: :view do
  let(:habit) {
    Habit.create!(
      name: "MyString",
      description: "MyString"
    )
  }

  before(:each) do
    assign(:habit, habit)
  end

  it "renders the edit habit form" do
    render

    assert_select "form[action=?][method=?]", habit_path(habit), "post" do

      assert_select "input[name=?]", "habit[name]"

      assert_select "input[name=?]", "habit[description]"
    end
  end
end

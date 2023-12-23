require 'rails_helper'

RSpec.describe "exercise_per_weeks/new", type: :view do
  before(:each) do
    assign(:exercise_per_week, ExercisePerWeek.new(
      days: 1,
      additional_info: "MyString"
    ))
  end

  it "renders new exercise_per_week form" do
    render

    assert_select "form[action=?][method=?]", exercise_per_weeks_path, "post" do

      assert_select "input[name=?]", "exercise_per_week[days]"

      assert_select "input[name=?]", "exercise_per_week[additional_info]"
    end
  end
end

require 'rails_helper'

RSpec.describe "exercise_per_weeks/edit", type: :view do
  let(:exercise_per_week) {
    ExercisePerWeek.create!(
      days: 1,
      additional_info: "MyString"
    )
  }

  before(:each) do
    assign(:exercise_per_week, exercise_per_week)
  end

  it "renders the edit exercise_per_week form" do
    render

    assert_select "form[action=?][method=?]", exercise_per_week_path(exercise_per_week), "post" do

      assert_select "input[name=?]", "exercise_per_week[days]"

      assert_select "input[name=?]", "exercise_per_week[additional_info]"
    end
  end
end

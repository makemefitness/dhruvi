require 'rails_helper'

RSpec.describe "exercise_per_weeks/show", type: :view do
  before(:each) do
    assign(:exercise_per_week, ExercisePerWeek.create!(
      days: 2,
      additional_info: "Additional Info"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/2/)
    expect(rendered).to match(/Additional Info/)
  end
end

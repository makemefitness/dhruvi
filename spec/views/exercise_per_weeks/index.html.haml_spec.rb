require 'rails_helper'

RSpec.describe 'exercise_per_weeks/index', type: :view do
  before(:each) do
    assign(:exercise_per_weeks, [
             ExercisePerWeek.create!(
               days: 2,
               additional_info: "Additional Info"
             ),
             ExercisePerWeek.create!(
               days: 2,
               additional_info: "Additional Info"
             )
    ])
  end

  it 'renders a list of exercise_per_weeks' do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'tr>td' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
    assert_select cell_selector, text: Regexp.new('Additional Info'.to_s), count: 2
  end
end

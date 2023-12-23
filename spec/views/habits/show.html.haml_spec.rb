require 'rails_helper'

RSpec.describe "habits/show", type: :view do
  before(:each) do
    assign(:habit, Habit.create!(
      name: "Name",
      description: "Description"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Description/)
  end
end

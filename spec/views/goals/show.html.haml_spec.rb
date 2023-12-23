require 'rails_helper'

RSpec.describe "goals/show", type: :view do
  before(:each) do
    assign(:goal, Goal.create!(
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

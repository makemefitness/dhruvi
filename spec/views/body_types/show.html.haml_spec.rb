require 'rails_helper'

RSpec.describe "body_types/show", type: :view do
  before(:each) do
    assign(:body_type, BodyType.create!(
      name: "Name",
      neat: "Neat",
      description: "Description"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Neat/)
    expect(rendered).to match(/Description/)
  end
end

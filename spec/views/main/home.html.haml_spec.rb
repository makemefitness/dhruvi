require 'rails_helper'

RSpec.describe "main/home.html.haml", type: :view do
  it "renders title of page" do
    render
    
    expect(rendered).to match /Main/
  end
end

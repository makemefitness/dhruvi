require 'rails_helper'

RSpec.describe "main/home.html.haml", type: :view do
  # login_user
  it "renders title of page" do
    render template: "main/home"
    
    expect(rendered).to match /welcome in CRM Trener/
  end
end

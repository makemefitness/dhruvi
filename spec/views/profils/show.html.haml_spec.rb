require 'rails_helper'

RSpec.describe "profils/show", type: :view do
  before(:each) do
    assign(:profil, Profil.create!(
      contusions: "Contusions",
      sickness: "Sickness",
      description: "Description"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Contusions/)
    expect(rendered).to match(/Sickness/)
    expect(rendered).to match(/Description/)
  end
end

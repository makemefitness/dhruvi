require 'rails_helper'

RSpec.describe "profils/index", type: :view do
  before(:each) do
    assign(:profils, [
      Profil.create!(
        contusions: "Contusions",
        sickness: "Sickness",
        description: "Description"
      ),
      Profil.create!(
        contusions: "Contusions",
        sickness: "Sickness",
        description: "Description"
      )
    ])
  end

  it "renders a list of profils" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Contusions".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Sickness".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Description".to_s), count: 2
  end
end

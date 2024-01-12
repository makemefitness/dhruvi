require 'rails_helper'

RSpec.describe "profils/edit", type: :view do
  let(:profil) {
    Profil.create!(
      contusions: "MyString",
      sickness: "MyString",
      description: "MyString"
    )
  }

  before(:each) do
    assign(:profil, profil)
  end

  it "renders the edit profil form" do
    render

    assert_select "form[action=?][method=?]", profil_path(profil), "post" do

      assert_select "input[name=?]", "profil[contusions]"

      assert_select "input[name=?]", "profil[sickness]"

      assert_select "input[name=?]", "profil[description]"
    end
  end
end

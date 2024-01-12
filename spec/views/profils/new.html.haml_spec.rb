require 'rails_helper'

RSpec.describe "profils/new", type: :view do
  before(:each) do
    assign(:profil, Profil.new(
      contusions: "MyString",
      sickness: "MyString",
      description: "MyString"
    ))
  end

  it "renders new profil form" do
    render

    assert_select "form[action=?][method=?]", profils_path, "post" do

      assert_select "input[name=?]", "profil[contusions]"

      assert_select "input[name=?]", "profil[sickness]"

      assert_select "input[name=?]", "profil[description]"
    end
  end
end

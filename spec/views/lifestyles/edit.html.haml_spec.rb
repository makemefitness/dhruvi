require 'rails_helper'

RSpec.describe "lifestyles/edit", type: :view do
  let(:lifestyle) {
    Lifestyle.create!(
      name: "MyString",
      description: "MyString"
    )
  }

  before(:each) do
    assign(:lifestyle, lifestyle)
  end

  it "renders the edit lifestyle form" do
    render

    assert_select "form[action=?][method=?]", lifestyle_path(lifestyle), "post" do

      assert_select "input[name=?]", "lifestyle[name]"

      assert_select "input[name=?]", "lifestyle[description]"
    end
  end
end

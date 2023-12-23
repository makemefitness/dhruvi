require 'rails_helper'

RSpec.describe "lifestyles/new", type: :view do
  before(:each) do
    assign(:lifestyle, Lifestyle.new(
      name: "MyString",
      description: "MyString"
    ))
  end

  it "renders new lifestyle form" do
    render

    assert_select "form[action=?][method=?]", lifestyles_path, "post" do

      assert_select "input[name=?]", "lifestyle[name]"

      assert_select "input[name=?]", "lifestyle[description]"
    end
  end
end

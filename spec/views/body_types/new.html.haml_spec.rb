require 'rails_helper'

RSpec.describe "body_types/new", type: :view do
  before(:each) do
    assign(:body_type, BodyType.new(
      name: "MyString",
      neat: "MyString",
      description: "MyString"
    ))
  end

  it "renders new body_type form" do
    render

    assert_select "form[action=?][method=?]", body_types_path, "post" do

      assert_select "input[name=?]", "body_type[name]"

      assert_select "input[name=?]", "body_type[neat]"

      assert_select "input[name=?]", "body_type[description]"
    end
  end
end

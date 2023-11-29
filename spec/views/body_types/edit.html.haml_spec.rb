require 'rails_helper'

RSpec.describe "body_types/edit", type: :view do
  let(:body_type) {
    BodyType.create!(
      name: "MyString",
      neat: "MyString",
      description: "MyString"
    )
  }

  before(:each) do
    assign(:body_type, body_type)
  end

  it "renders the edit body_type form" do
    render

    assert_select "form[action=?][method=?]", body_type_path(body_type), "post" do

      assert_select "input[name=?]", "body_type[name]"

      assert_select "input[name=?]", "body_type[neat]"

      assert_select "input[name=?]", "body_type[description]"
    end
  end
end

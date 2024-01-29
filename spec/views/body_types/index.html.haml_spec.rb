require 'rails_helper'

RSpec.describe 'body_types/index', type: :view do
  before(:each) do
    assign(:body_types, [
             BodyType.create!(
               name: 'Name',
               neat: 'Neat',
               description: 'Description'
             ),
             BodyType.create!(
               name: 'Name 2',
               neat: 'Neat',
               description: 'Description'
             )
           ])
  end

  it 'renders a list of body_types' do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'tr>td' : 'tr>td'
    assert_select cell_selector, text: Regexp.new('Name'.to_s), count: 2
    assert_select cell_selector, text: Regexp.new('Neat'.to_s), count: 2
    assert_select cell_selector, text: Regexp.new('Description'.to_s), count: 2
  end
end

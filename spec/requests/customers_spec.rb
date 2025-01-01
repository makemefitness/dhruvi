require 'rails_helper'

RSpec.describe "Customers", type: :request do
  describe "GET /index" do
    context "user login" do
      let(:user) { create(:user) }

      before do
        sign_in user # Assuming you're using Devise
        get '/customers'
      end

      it 'return http success' do
        expect(response).to have_http_status(:success)
      end
    end

    context "when no user is logged in" do
      before do
        get '/customers'
      end
      it "redirect to root path" do
        expect(response).to redirect_to(root_path)
      end
    end
  end
end

require 'rails_helper'

RSpec.describe "Mains", type: :request do
  describe "GET /home" do
    it "returns http success" do
      get "/main/home"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /help" do
    it "returns http success" do
      get "/main/help"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /about" do
    it "returns http success" do
      get "/main/about"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /dashboard" do
    context "user login" do
      let(:user) { create(:user) }

      before do
        sign_in user # Assuming you're using Devise
        get '/dashboard'
      end

      it 'return http success' do
        expect(response).to have_http_status(:success)
      end
    end

    context "when no user is logged in" do
      before do
        get '/dashboard'
      end
      it "redirect to root path" do
        expect(response).to redirect_to(root_path)
      end
    end
  end
end

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

end

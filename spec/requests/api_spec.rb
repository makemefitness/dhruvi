require 'rails_helper'

RSpec.describe "Apis", type: :request do
  describe "GET /ingredients" do
    it "returns http success" do
      get "/api/ingredients"
      expect(response).to have_http_status(:success)
    end
  end

end

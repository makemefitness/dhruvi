require 'rails_helper'

RSpec.describe "Apis", type: :request do
  describe "GET /ingredients" do
    context "when user log in" do
      login_user
      it "returns http success" do
        get "/api/ingredients"
        expect(response).to have_http_status(:success)
      end
    end

    context "when no user log in" do
      it "returns http success" do
        get "/api/ingredients"
        expect(response).to have_http_status(:redirect)
      end
    end
  end
end

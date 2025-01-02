require 'rails_helper'

RSpec.describe "/lifestyles", type: :request do
  let(:user) { create(:user) } # Test user

  # Valid attributes for the Lifestyle model
  let(:valid_attributes) {
    { name: "Active", description: 7.5 }
  }

  # Invalid attributes for the Lifestyle model
  let(:invalid_attributes) {
    { name: "", description: 15.0 } # Description is out of range
  }

  # Shared examples for unauthorized access
  shared_examples "unauthorized access" do
    it "redirects to the login page" do
      action.call
      expect(response).to redirect_to(root_path) # Devise login path
    end
  end

  # Ensure the user is logged in before tests
  before do
    sign_in user # Devise helper to log in the user
  end

  describe "GET /index" do
    context "when logged in" do
      it "renders a successful response" do
        Lifestyle.create! valid_attributes
        get lifestyles_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get lifestyles_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /show" do
    let(:lifestyle) { Lifestyle.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get lifestyle_url(lifestyle)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get lifestyle_url(lifestyle) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /new" do
    context "when logged in" do
      it "renders a successful response" do
        get new_lifestyle_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get new_lifestyle_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /edit" do
    let(:lifestyle) { Lifestyle.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get edit_lifestyle_url(lifestyle)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get edit_lifestyle_url(lifestyle) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "POST /create" do
    context "when logged in" do
      context "with valid parameters" do
        it "creates a new Lifestyle" do
          expect {
            post lifestyles_url, params: { lifestyle: valid_attributes }
          }.to change(Lifestyle, :count).by(1)
        end

        it "redirects to the created lifestyle" do
          post lifestyles_url, params: { lifestyle: valid_attributes }
          expect(response).to redirect_to(lifestyle_url(Lifestyle.last))
        end
      end

      context "with invalid parameters" do
        it "does not create a new Lifestyle" do
          expect {
            post lifestyles_url, params: { lifestyle: invalid_attributes }
          }.to change(Lifestyle, :count).by(0)
        end

        it "renders a response with 422 status (i.e., to display the 'new' template)" do
          post lifestyles_url, params: { lifestyle: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { post lifestyles_url, params: { lifestyle: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "PATCH /update" do
    let(:lifestyle) { Lifestyle.create! valid_attributes }

    context "when logged in" do
      context "with valid parameters" do
        let(:new_attributes) { { name: "Very Active", description: 9.0 } }

        it "updates the requested lifestyle" do
          patch lifestyle_url(lifestyle), params: { lifestyle: new_attributes }
          lifestyle.reload
          expect(lifestyle.name).to eq("Very Active")
          expect(lifestyle.description).to eq("9.0")
        end

        it "redirects to the lifestyle" do
          patch lifestyle_url(lifestyle), params: { lifestyle: new_attributes }
          expect(response).to redirect_to(lifestyle_url(lifestyle))
        end
      end

      context "with invalid parameters" do
        it "renders a response with 422 status (i.e., to display the 'edit' template)" do
          patch lifestyle_url(lifestyle), params: { lifestyle: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { patch lifestyle_url(lifestyle), params: { lifestyle: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "DELETE /destroy" do
    let!(:lifestyle) { Lifestyle.create! valid_attributes }

    context "when logged in" do
      it "destroys the requested lifestyle" do
        expect {
          delete lifestyle_url(lifestyle)
        }.to change(Lifestyle, :count).by(-1)
      end

      it "redirects to the lifestyles list" do
        delete lifestyle_url(lifestyle)
        expect(response).to redirect_to(lifestyles_url)
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { delete lifestyle_url(lifestyle) } }

      it_behaves_like "unauthorized access"
    end
  end
end
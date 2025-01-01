require 'rails_helper'

RSpec.describe "/profils", type: :request do
  let(:user) { create(:user) } # Test user
  let(:profil){ create(:profil) }
  let(:customer) { profil.customer }
  # Valid attributes for the Profil model
  let(:valid_attributes) { attributes_for(:profil) }

  # Invalid attributes for the Profil model
  let(:invalid_attributes) {
    { customer_id: nil, description: "" }
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


  describe "GET /show" do
    context "when logged in" do
      it "renders a successful response" do
        get customer_profil_url(customer)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get customer_profil_url(customer) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /new" do
    context "when logged in" do
      it "renders a successful response" do
        get new_customer_profil_url(customer)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get new_customer_profil_url(customer) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /edit" do
    context "when logged in" do
      it "renders a successful response" do
        get edit_customer_profil_url(customer)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get edit_customer_profil_url(customer) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "POST /create" do
    context "when logged in" do
      context "with valid parameters" do
        it "creates a new Profil" do
          expect {
            post customer_profil_url(customer), params: { profil: valid_attributes }
          }.to change(Profil, :count).by(1)
        end

        it "redirects to the created profil" do
          post customer_profil_url(customer), params: { profil: valid_attributes }
          expect(response).to redirect_to(customer_url(customer))
        end
      end

      # context "with invalid parameters" do
      #   it "does not create a new Profil" do
      #     expect {
      #       post customer_profil_url(customer), params: { profil: invalid_attributes }
      #     }.to change(Profil, :count).by(0)
      #   end

      #   it "renders a response with 422 status (i.e., to display the 'new' template)" do
      #     post customer_profil_url(customer), params: { profil: invalid_attributes }
      #     expect(response).to have_http_status(:unprocessable_entity)
      #   end
      # end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { post customer_profil_url(customer), params: { profil: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "PATCH /update" do
    context "when logged in" do
      context "with valid parameters" do
        let(:new_attributes) {
          { goal_id: 3, description: "Updated description" }
        }

        it "updates the requested profil" do
          patch customer_profil_url(customer), params: { profil: new_attributes }
          profil.reload
          expect(profil.goal_id).to eq(3)
        end

        it "redirects to the profil" do
          patch customer_profil_url(customer), params: { profil: new_attributes }
          expect(response).to redirect_to(customer_url(customer))
        end
      end

      context "with invalid parameters" do
        it "renders a response with 422 status (i.e., to display the 'edit' template)" do
          patch customer_profil_url(customer), params: { profil: invalid_attributes }
          expect(response).to redirect_to(customer_url(customer))
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { patch customer_profil_url(customer), params: { profil: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  # describe "DELETE /destroy" do
  #   context "when logged in" do
  #     it "destroys the requested profil" do
  #       expect {
  #         delete customer_profil_url(customer)
  #       }.to change(Profil, :count).by(-1)
  #     end

  #     it "redirects to the profils list" do
  #       delete customer_profil_url(customer)
  #       expect(response).to redirect_to(customer_url(customer))
  #     end
  #   end

  #   context "when not logged in" do
  #     before { sign_out user }

  #     let(:action) { -> { delete customer_profil_url(customer) } }

  #     it_behaves_like "unauthorized access"
  #   end
  # end
end

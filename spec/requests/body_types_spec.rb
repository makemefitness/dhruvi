require 'rails_helper'

RSpec.describe "/body_types", type: :request do
  let(:valid_attributes)  { attributes_for(:body_type, name: 'first') }

  let(:invalid_attributes) {
    { name: "" } # Add invalid attributes for your BodyType model
  }

  let(:user) { create(:user) } # Create a test user

  # Shared examples for unauthorized access
  shared_examples "unauthorized access" do
    it "redirects to the home page" do
      action.call
      expect(response).to redirect_to(root_path) # Devise login path
    end
  end

  # Ensure user is logged in before tests
  before do
    sign_in user # Assuming Devise test helpers
  end

  describe "GET /index" do
    context "when logged in" do
      it "renders a successful response" do
        BodyType.create! valid_attributes
        get body_types_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get body_types_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /show" do
    let(:body_type) { BodyType.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get body_type_url(body_type)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get body_type_url(body_type) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /new" do
    context "when logged in" do
      it "renders a successful response" do
        get new_body_type_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get new_body_type_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /edit" do
    let(:body_type) { BodyType.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get edit_body_type_url(body_type)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get edit_body_type_url(body_type) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "POST /create" do
    context "when logged in" do
      context "with valid parameters" do
        it "creates a new BodyType" do
          expect {
            post body_types_url, params: { body_type: valid_attributes }
          }.to change(BodyType, :count).by(1)
        end

        it "redirects to the created body_type" do
          post body_types_url, params: { body_type: valid_attributes }
          expect(response).to redirect_to(body_type_url(BodyType.last))
        end
      end

      context "with invalid parameters" do
        it "does not create a new BodyType" do
          expect {
            post body_types_url, params: { body_type: invalid_attributes }
          }.to change(BodyType, :count).by(0)
        end

        it "renders a response with 422 status (i.e., to display the 'new' template)" do
          post body_types_url, params: { body_type: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { post body_types_url, params: { body_type: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "PATCH /update" do
    let(:body_type) { BodyType.create! valid_attributes }

    context "when logged in" do
      context "with valid parameters" do
        let(:new_attributes) { { name: "Updated Name" } }

        it "updates the requested body_type" do
          patch body_type_url(body_type), params: { body_type: new_attributes }
          body_type.reload
          expect(body_type.name).to eq("Updated Name")
        end

        it "redirects to the body_type" do
          patch body_type_url(body_type), params: { body_type: new_attributes }
          expect(response).to redirect_to(body_type_url(body_type))
        end
      end

      context "with invalid parameters" do
        it "renders a response with 422 status (i.e., to display the 'edit' template)" do
          patch body_type_url(body_type), params: { body_type: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { patch body_type_url(body_type), params: { body_type: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "DELETE /destroy" do
    let!(:body_type) { BodyType.create! valid_attributes }

    context "when logged in" do
      it "destroys the requested body_type" do
        expect {
          delete body_type_url(body_type)
        }.to change(BodyType, :count).by(-1)
      end

      it "redirects to the body_types list" do
        delete body_type_url(body_type)
        expect(response).to redirect_to(body_types_url)
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { delete body_type_url(body_type) } }

      it_behaves_like "unauthorized access"
    end
  end
end
require 'rails_helper'

RSpec.describe "/goals", type: :request do
  let(:user) { create(:user) } # Test user

  # Valid attributes for the Goal model
  let(:valid_attributes) {
    { name: "Lose weight", description: "Lose 5kg in 3 months" }
  }

  # Invalid attributes for the Goal model
  let(:invalid_attributes) {
    { name: "", description: "" }
  }

  # Shared examples for unauthorized access
  shared_examples "unauthorized access" do
    it "redirects to the home page" do
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
        Goal.create! valid_attributes
        get goals_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get goals_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /show" do
    let(:goal) { Goal.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get goal_url(goal)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get goal_url(goal) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /new" do
    context "when logged in" do
      it "renders a successful response" do
        get new_goal_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get new_goal_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /edit" do
    let(:goal) { Goal.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get edit_goal_url(goal)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get edit_goal_url(goal) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "POST /create" do
    context "when logged in" do
      context "with valid parameters" do
        it "creates a new Goal" do
          expect {
            post goals_url, params: { goal: valid_attributes }
          }.to change(Goal, :count).by(1)
        end

        it "redirects to the created goal" do
          post goals_url, params: { goal: valid_attributes }
          expect(response).to redirect_to(goal_url(Goal.last))
        end
      end

      context "with invalid parameters" do
        it "does not create a new Goal" do
          expect {
            post goals_url, params: { goal: invalid_attributes }
          }.to change(Goal, :count).by(0)
        end

        it "renders a response with 422 status (i.e., to display the 'new' template)" do
          post goals_url, params: { goal: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { post goals_url, params: { goal: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "PATCH /update" do
    let(:goal) { Goal.create! valid_attributes }

    context "when logged in" do
      context "with valid parameters" do
        let(:new_attributes) {
          { name: "Updated goal", description: "Updated description", target_date: Date.today + 120 }
        }

        it "updates the requested goal" do
          patch goal_url(goal), params: { goal: new_attributes }
          goal.reload
          expect(goal.name).to eq("Updated goal")
        end

        it "redirects to the goal" do
          patch goal_url(goal), params: { goal: new_attributes }
          expect(response).to redirect_to(goal_url(goal))
        end
      end

      context "with invalid parameters" do
        it "renders a response with 422 status (i.e., to display the 'edit' template)" do
          patch goal_url(goal), params: { goal: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { patch goal_url(goal), params: { goal: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "DELETE /destroy" do
    let!(:goal) { Goal.create! valid_attributes }

    context "when logged in" do
      it "destroys the requested goal" do
        expect {
          delete goal_url(goal)
        }.to change(Goal, :count).by(-1)
      end

      it "redirects to the goals list" do
        delete goal_url(goal)
        expect(response).to redirect_to(goals_url)
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { delete goal_url(goal) } }

      it_behaves_like "unauthorized access"
    end
  end
end

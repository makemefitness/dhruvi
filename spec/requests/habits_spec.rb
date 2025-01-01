require 'rails_helper'

RSpec.describe "/habits", type: :request do
  let(:user) { create(:user) } # Test user

  # Valid attributes for the Habit model
  let(:valid_attributes) {
    { name: "Exercise daily", description: "Work out for 30 minutes every day" }
  }

  # Invalid attributes for the Habit model
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
        Habit.create! valid_attributes
        get habits_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get habits_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /show" do
    let(:habit) { Habit.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get habit_url(habit)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get habit_url(habit) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /new" do
    context "when logged in" do
      it "renders a successful response" do
        get new_habit_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get new_habit_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /edit" do
    let(:habit) { Habit.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get edit_habit_url(habit)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get edit_habit_url(habit) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "POST /create" do
    context "when logged in" do
      context "with valid parameters" do
        it "creates a new Habit" do
          expect {
            post habits_url, params: { habit: valid_attributes }
          }.to change(Habit, :count).by(1)
        end

        it "redirects to the created habit" do
          post habits_url, params: { habit: valid_attributes }
          expect(response).to redirect_to(habit_url(Habit.last))
        end
      end

      context "with invalid parameters" do
        it "does not create a new Habit" do
          expect {
            post habits_url, params: { habit: invalid_attributes }
          }.to change(Habit, :count).by(0)
        end

        it "renders a response with 422 status (i.e., to display the 'new' template)" do
          post habits_url, params: { habit: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { post habits_url, params: { habit: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "PATCH /update" do
    let(:habit) { Habit.create! valid_attributes }

    context "when logged in" do
      context "with valid parameters" do
        let(:new_attributes) {
          { name: "Read daily", description: "Read for 20 minutes every day" }
        }

        it "updates the requested habit" do
          patch habit_url(habit), params: { habit: new_attributes }
          habit.reload
          expect(habit.name).to eq("Read daily")
        end

        it "redirects to the habit" do
          patch habit_url(habit), params: { habit: new_attributes }
          expect(response).to redirect_to(habit_url(habit))
        end
      end

      context "with invalid parameters" do
        it "renders a response with 422 status (i.e., to display the 'edit' template)" do
          patch habit_url(habit), params: { habit: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { patch habit_url(habit), params: { habit: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "DELETE /destroy" do
    let!(:habit) { Habit.create! valid_attributes }

    context "when logged in" do
      it "destroys the requested habit" do
        expect {
          delete habit_url(habit)
        }.to change(Habit, :count).by(-1)
      end

      it "redirects to the habits list" do
        delete habit_url(habit)
        expect(response).to redirect_to(habits_url)
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { delete habit_url(habit) } }

      it_behaves_like "unauthorized access"
    end
  end
end

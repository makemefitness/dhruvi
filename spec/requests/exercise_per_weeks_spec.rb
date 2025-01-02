require 'rails_helper'

RSpec.describe "/exercise_per_weeks", type: :request do
  let(:user) { create(:user) } # A test user
  let(:valid_attributes) {
    { days: 5, additional_info: 'some info' } # Add valid attributes for your ExercisePerWeek model
  }

  let(:invalid_attributes) { attributes_for(:exercise_per_week, days: 'first') }

  # Shared examples for unauthorized access
  shared_examples "unauthorized access" do
    it "redirects to the home page" do
      action.call
      expect(response).to redirect_to(root_path) # Devise login path
    end
  end

  # Ensure user is logged in before tests
  before do
    sign_in user # Devise helper to sign in the user
  end

  describe "GET /index" do
    context "when logged in" do
      it "renders a successful response" do
        ExercisePerWeek.create! valid_attributes
        get exercise_per_weeks_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get exercise_per_weeks_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /show" do
    let(:exercise_per_week) { ExercisePerWeek.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get exercise_per_week_url(exercise_per_week)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get exercise_per_week_url(exercise_per_week) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /new" do
    context "when logged in" do
      it "renders a successful response" do
        get new_exercise_per_week_url
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get new_exercise_per_week_url } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "GET /edit" do
    let(:exercise_per_week) { ExercisePerWeek.create! valid_attributes }

    context "when logged in" do
      it "renders a successful response" do
        get edit_exercise_per_week_url(exercise_per_week)
        expect(response).to be_successful
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { get edit_exercise_per_week_url(exercise_per_week) } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "POST /create" do
    context "when logged in" do
      context "with valid parameters" do
        it "creates a new ExercisePerWeek" do
          expect {
            post exercise_per_weeks_url, params: { exercise_per_week: valid_attributes }
          }.to change(ExercisePerWeek, :count).by(1)
        end

        it "redirects to the created exercise_per_week" do
          post exercise_per_weeks_url, params: { exercise_per_week: valid_attributes }
          expect(response).to redirect_to(exercise_per_week_url(ExercisePerWeek.last))
        end
      end

      context "with invalid parameters" do
        it "does not create a new ExercisePerWeek" do
          expect {
            post exercise_per_weeks_url, params: { exercise_per_week: invalid_attributes }
          }.to change(ExercisePerWeek, :count).by(0)
        end

        it "renders a response with 422 status (i.e., to display the 'new' template)" do
          post exercise_per_weeks_url, params: { exercise_per_week: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { post exercise_per_weeks_url, params: { exercise_per_week: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "PATCH /update" do
    let(:exercise_per_week) { ExercisePerWeek.create! valid_attributes }

    context "when logged in" do
      context "with valid parameters" do
        let(:new_attributes) { { additional_info: "Updated Info", exercises: 10, duration: 120 } }

        it "updates the requested exercise_per_week" do
          patch exercise_per_week_url(exercise_per_week), params: { exercise_per_week: new_attributes }
          exercise_per_week.reload
          expect(exercise_per_week.additional_info).to eq("Updated Info")
        end

        it "redirects to the exercise_per_week" do
          patch exercise_per_week_url(exercise_per_week), params: { exercise_per_week: new_attributes }
          expect(response).to redirect_to(exercise_per_week_url(exercise_per_week))
        end
      end

      context "with invalid parameters" do
        it "renders a response with 422 status (i.e., to display the 'edit' template)" do
          patch exercise_per_week_url(exercise_per_week), params: { exercise_per_week: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { patch exercise_per_week_url(exercise_per_week), params: { exercise_per_week: valid_attributes } } }

      it_behaves_like "unauthorized access"
    end
  end

  describe "DELETE /destroy" do
    let!(:exercise_per_week) { ExercisePerWeek.create! valid_attributes }

    context "when logged in" do
      it "destroys the requested exercise_per_week" do
        expect {
          delete exercise_per_week_url(exercise_per_week)
        }.to change(ExercisePerWeek, :count).by(-1)
      end

      it "redirects to the exercise_per_weeks list" do
        delete exercise_per_week_url(exercise_per_week)
        expect(response).to redirect_to(exercise_per_weeks_url)
      end
    end

    context "when not logged in" do
      before { sign_out user }

      let(:action) { -> { delete exercise_per_week_url(exercise_per_week) } }

      it_behaves_like "unauthorized access"
    end
  end
end
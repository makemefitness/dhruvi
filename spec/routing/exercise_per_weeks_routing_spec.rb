require "rails_helper"

RSpec.describe ExercisePerWeeksController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/exercise_per_weeks").to route_to("exercise_per_weeks#index")
    end

    it "routes to #new" do
      expect(get: "/exercise_per_weeks/new").to route_to("exercise_per_weeks#new")
    end

    it "routes to #show" do
      expect(get: "/exercise_per_weeks/1").to route_to("exercise_per_weeks#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/exercise_per_weeks/1/edit").to route_to("exercise_per_weeks#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/exercise_per_weeks").to route_to("exercise_per_weeks#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/exercise_per_weeks/1").to route_to("exercise_per_weeks#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/exercise_per_weeks/1").to route_to("exercise_per_weeks#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/exercise_per_weeks/1").to route_to("exercise_per_weeks#destroy", id: "1")
    end
  end
end

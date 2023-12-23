require "rails_helper"

RSpec.describe LifestylesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/lifestyles").to route_to("lifestyles#index")
    end

    it "routes to #new" do
      expect(get: "/lifestyles/new").to route_to("lifestyles#new")
    end

    it "routes to #show" do
      expect(get: "/lifestyles/1").to route_to("lifestyles#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/lifestyles/1/edit").to route_to("lifestyles#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/lifestyles").to route_to("lifestyles#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/lifestyles/1").to route_to("lifestyles#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/lifestyles/1").to route_to("lifestyles#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/lifestyles/1").to route_to("lifestyles#destroy", id: "1")
    end
  end
end

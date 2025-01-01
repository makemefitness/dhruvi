require 'rails_helper'

RSpec.describe "/ingredients", type: :request do

  let(:valid_attributes) { attributes_for(:ingredient, name: 'first') }

  let(:invalid_attributes) { attributes_for(:ingredient, name: '') }

  before do
    ingredients = FactoryBot.create_list(:ingredient, 10)
  end
  context "when user login" do
    login_user
    describe "GET /index" do
      it "renders a successful response" do
        get ingredients_url
        expect(response).to be_successful
      end
    end

    describe "GET /show" do
      it "renders a successful response" do
        get ingredient_url(Ingredient.last)
        expect(response).to be_successful
      end
    end

    describe "GET /new" do
      it "renders a successful response" do
        get new_ingredient_url
        expect(response).to be_successful
      end
    end

    describe "GET /edit" do
      it "renders a successful response" do
        ingredient = Ingredient.last
        get edit_ingredient_url(ingredient)
        expect(response).to be_successful
      end
    end

    describe "POST /create" do
      context "with valid parameters" do
        it "creates a new Ingredient" do
          expect {
            post ingredients_url, params: { ingredient: valid_attributes }
          }.to change(Ingredient, :count).by(1)
        end

        it "redirects to the created ingredient" do
          post ingredients_url, params: { ingredient: valid_attributes }
          expect(response).to redirect_to(ingredient_url(Ingredient.last))
        end
      end

      context "with invalid parameters" do
        it "does not create a new Ingredient" do
          expect {
            post ingredients_url, params: { ingredient: invalid_attributes }
          }.to change(Ingredient, :count).by(0)
        end

        it "renders a response with 422 status (i.e. to display the 'new' template)" do
          post ingredients_url, params: { ingredient: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    describe "PATCH /update" do
      context "with valid parameters" do
        let(:new_attributes) { attributes_for(:ingredient, name: 'second') }

        it "updates the requested ingredient" do
          ingredient = Ingredient.last
          patch ingredient_url(ingredient), params: { ingredient: new_attributes }
          ingredient.reload
          expect(ingredient.name).to eq('second')
        end

        it "redirects to the ingredient" do
          ingredient = Ingredient.create! valid_attributes
          patch ingredient_url(ingredient), params: { ingredient: new_attributes }
          ingredient.reload
          expect(response).to redirect_to(ingredient_url(ingredient))
        end
      end

      context "with invalid parameters" do
        it "renders a response with 422 status (i.e. to display the 'edit' template)" do
          ingredient = Ingredient.last
          patch ingredient_url(ingredient), params: { ingredient: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    describe "DELETE /destroy" do
      it "destroys the requested ingredient" do
        ingredient = Ingredient.last
        expect {
          delete ingredient_url(ingredient)
        }.to change(Ingredient, :count).by(-1)
      end

      it "redirects to the ingredients list" do
        ingredient = Ingredient.last
        delete ingredient_url(ingredient)
        expect(response).to redirect_to(ingredients_url)
      end
    end
  end


  context "when no user is logged in" do
    describe "GET /index" do
      it "redirect to root path" do
        get ingredients_url
        expect(response).to redirect_to root_path
      end
    end

    describe "GET /show" do
      it "redirect to root path" do
        get ingredient_url(Ingredient.last)
        expect(response).to redirect_to root_path
      end
    end

    describe "GET /new" do
      it "redirect to root path" do
        get new_ingredient_url
        expect(response).to redirect_to root_path
      end
    end

    describe "GET /edit" do
      it "redirect to root path" do
        ingredient = Ingredient.last
        get edit_ingredient_url(ingredient)
        expect(response).to redirect_to root_path
      end
    end

    describe "POST /create" do
      context "with valid parameters" do
        it "dosent create a new Ingredient" do
          expect {
            post ingredients_url, params: { ingredient: valid_attributes }
          }.to change(Ingredient, :count).by(0)
        end

        it "redirects to the root path" do
          post ingredients_url, params: { ingredient: valid_attributes }
          expect(response).to redirect_to root_path
        end
      end

      context "with invalid parameters" do
        it "does not create a new Ingredient" do
          expect {
            post ingredients_url, params: { ingredient: invalid_attributes }
          }.to change(Ingredient, :count).by(0)
        end

        it "redirect to root path" do
          post ingredients_url, params: { ingredient: invalid_attributes }
          expect(response).to have_http_status(:redirect)
        end
      end
    end

    describe "PATCH /update" do
      context "with valid parameters" do
        let(:new_attributes) { attributes_for(:ingredient, name: 'first') }

        it "dosent update the requested ingredient" do
          ingredient = Ingredient.last
          patch ingredient_url(ingredient), params: { ingredient: new_attributes }
          ingredient.reload
          expect(response).to redirect_to root_path
        end

        it "redirects to the root path" do
          ingredient = Ingredient.last
          patch ingredient_url(ingredient), params: { ingredient: new_attributes }
          ingredient.reload
          expect(response).to redirect_to root_path
        end
      end

      context "with invalid parameters" do
        it "redirect to root path" do
          ingredient = Ingredient.last
          patch ingredient_url(ingredient), params: { ingredient: invalid_attributes }
          expect(response).to have_http_status(:redirect)
        end
      end
    end

    describe "DELETE /destroy" do
      it "dosent destroy the requested ingredient" do
        ingredient = Ingredient.last
        expect {
          delete ingredient_url(ingredient)
        }.to change(Ingredient, :count).by(0)
      end

      it "redirects to the root path" do
        ingredient = Ingredient.last
        delete ingredient_url(ingredient)
        expect(response).to redirect_to(root_path)
      end
    end
  end
end

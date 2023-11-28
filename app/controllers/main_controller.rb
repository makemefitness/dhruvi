class MainController < ApplicationController
  before_action :authenticate_user!, except: :search
  def main
  end
  def home
  end
  def help
  end

  def autocomplete
    @ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    @recipes =     Recipe.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    respond_to do |format|
      format.html {}
      format.json {
      }
    end
  end

  def search
    #@ingredients = Ingredient.all.map(&:name)
    @ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    @recipes =     Recipe.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    render json: {ingredients: @ingredients, recipes: @recipes}
    #@ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true)
    
    # respond_to do |format|
    #   format.html {}
    #   format.json {
    #     @ingredients = @ingredients.limit(5).map(&:name)
    #     @recipes = @recipes.limit(5).map(&:name)
    #   }
    # end

    # render json: {recipes: [], ingredients: []}
  end
end

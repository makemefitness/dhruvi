class MainController < ApplicationController
  before_action :authenticate_user!, only: [:main]
  def main
  end
  def home
  end
  def help
  end

  def search
    #@ingredients = Ingredient.all.map(&:name)
    @ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true)
    puts @ingredients.first.name
    render json: {ingredients: @ingredients.map(&:name)}
    #@ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true)
    # @recipes = Recipe.ransack(name_cont: params[:q]).result(distinct: true)
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

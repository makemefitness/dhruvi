class ApiController < ApplicationController
  before_action :force_json

   def recipes
    @recipes = Recipe.order(:name).where("name like ?", "%#{params[:term]}%")

    #render json: @recipes.map(&:name)
  end

  def ingredients
    @ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
  end

  private
  def force_json
    request.format = :json
  end
end

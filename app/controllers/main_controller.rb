class MainController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]
  def dashboard
  end
  
  def main
  end
  def home
  end

  def customer
    @customer = current_customer
  end

  def help
  end

  def settings
    @goals = Goal.all
    @lifestyles = Lifestyle.all
    @habits = Habit.all
    @exercise_per_weeks = ExercisePerWeek.all
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
    @ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    @recipes =     Recipe.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    render json: {ingredients: @ingredients, recipes: @recipes}
  end
end

class MainController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]
  before_action :authenticate_customer!, only: :customer
  layout 'customer', only: [:customer]

  def dashboard; end
  
  def main; end

  def home; end

  def customer
    @customer = current_customer
  end

  def help; end

  def settings
    @goals = Goal.all
    @lifestyles = Lifestyle.all
    @habits = Habit.all
    @exercise_per_weeks = ExercisePerWeek.all
    @equipments = Equipment.all.order(:name)
    @body_parts = BodyPart.all.order(:name)
    @targets = Target.order(:name)
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
    @customers = search_customer
    # @customers = Customer.ransack(name_count: params[:q]).result(distinct: true).limit(5)
    @ingredients = Ingredient.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    @recipes =     Recipe.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    respond_to do |format|
      format.html {}
      format.json {
      }
    end
  end

  private
  
  def search_customer
    if params[:q].present? 
      @keywords = params[:q]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer.where(
        customer_search_term.where_clause,
        customer_search_term.where_args
      ).order(customer_search_term.order).limit(5)
    end
  end
end

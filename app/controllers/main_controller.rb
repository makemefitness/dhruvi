class MainController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard, :settings]
  before_action :authenticate_customer!, only: :customer
  before_action :get_mailbox, only: :customer
  before_action :get_conversation, only: :customer
  skip_before_action :authenticate, only: [:home, :main, :help, :about]


  def dashboard; end
  
  def main; end

  def adminlte
    layout 'adminlte'
  end

  def home; end

  def customer
    # layout "customer"
    @customer = current_customer
    @diet_sets = @customer.diet_sets
    @conversations = @mailbox.inbox.paginate(page: params[:page], per_page: 10)
  end

  def help; end

  def settings
    @goals = Goal.all.order(:name)
    @lifestyles = Lifestyle.all.order(:name)
    @habits = Habit.all.order(:name)
    @exercise_per_weeks = ExercisePerWeek.all
    @body_types = BodyType.all.order(:name)
    @equipments = Equipment.all.order(:name)
    @body_parts = BodyPart.all.order(:name)
    @targets = Target.order(:name)
  end

  def autocomplete
    @customers = search_customer
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

  def get_mailbox
    @mailbox ||= current_customer.mailbox
  end

  def get_conversation
    @conversation ||= @mailbox.conversations.first
  end
end

class DietSetsController < ApplicationController
  before_action :set_diet_set, only: %i[ show edit update destroy add_meal]
  before_action :set_customer, only: [:index, :show, :new, :edit, :create, :update, :destroy]

  # GET /diet_sets or /diet_sets.json
  def index
    @diet_sets = @customer.diet_sets
  end

  # GET /diet_sets/1 or /diet_sets/1.json
  def show
    @rec
  end

  # GET /diet_sets/new
  def new
    @diet_set = @customer.diet_sets.new
    @customr_recipes = @diet_set.customer_recipes.build
    @customer_diets = @customr_recipes.customer_diets.build
  end

  def add_meal
    @customer_recipe = @diet_set.customer_recipes.build()
  end

  # GET /diet_sets/1/edit
  def edit
  end

  # POST /diet_sets or /diet_sets.json
  def create
    @diet_set = @customer.diet_sets.new(diet_set_params)

    respond_to do |format|
      if @diet_set.save
        format.html { redirect_to customer_diet_set_path(@customer, @diet_set), notice: "Diet set was successfully created." }
        format.json { render :show, status: :created, location: @diet_set }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @diet_set.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /diet_sets/1 or /diet_sets/1.json
  def update
    respond_to do |format|
      if @diet_set.update(diet_set_params)
        format.html { redirect_to customer_path(@customer), notice: "Diet set was successfully updated." }
        format.json { render :show, status: :ok, location: @diet_set }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @diet_set.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /diet_sets/1 or /diet_sets/1.json
  def destroy
    @diet_set.destroy!

    respond_to do |format|
      format.html { redirect_to diet_sets_url, notice: "Diet set was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diet_set
      @diet_set = DietSet.find(params[:id])
    end

    def set_customer
      @customer = Customer.find(params[:customer_id])
    end

    # Only allow a list of trusted parameters through.
    def diet_set_params
      params.require(:diet_set).permit(:name, :customer_id, customer_recipes_attributes: [:id, :recipe_id, :name, :_destroy, customer_diets_attributes: [:id, :ingredient_id, :amount, :_destroy]])
    end
end

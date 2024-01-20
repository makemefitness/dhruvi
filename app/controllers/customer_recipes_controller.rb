class CustomerRecipesController < ApplicationController
  before_action :set_customer_recipe, only: %i[ show edit update destroy ]
  skip_before_action :set_customer_recipe, only: :diet_search
  skip_before_action :verify_authenticity_token, only: :update

  # GET /customer_recipes or /customer_recipes.json
  def index
    @customer_recipes = CustomerRecipe.all
  end

  # GET /customer_recipes/1 or /customer_recipes/1.json
  def show
    @recipe = Recipe.find(@customer_recipe.recipe_id)
  end

  # GET /customer_recipes/new
  def new
    if params[:id]
      @recipe = Recipe.find(params[:id])
      @customer_recipe = CustomerRecipe.new(recipe_id: @recipe.id)
      clone_recipeingredients(@recipe, @customer_recipe)
    else
      @customer_recipe = CustomerRecipe.new()
      @customer_recipe.customer_diets.build
    end
  end

  def diet_search
    @recipes = Recipe.ransack(name_cont: params[:q]).result(distinct: true)
    puts "#{@recipes.size}"
    respond_to do |format|
      format.json {
        @recipes = @recipes.limit(10)
      }
    end
  end

  def moja
    @pizda = params[:format]
  end

  # GET /customer_recipes/1/edit
  def edit
    @recipe = Recipe.find(@customer_recipe.recipe_id)
  end

  # POST /customer_recipes or /customer_recipes.json
  def create
    @customer_recipe = CustomerRecipe.new(customer_recipe_params)

    respond_to do |format|
      if @customer_recipe.save
        format.html { redirect_to customer_recipe_url(@customer_recipe), notice: "Customer recipe was successfully created." }
        format.json { render :show, status: :created, location: @customer_recipe }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @customer_recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /customer_recipes/1 or /customer_recipes/1.json
  def update
    respond_to do |format|
      if @customer_recipe.update(customer_recipe_params)
        format.html { redirect_to customer_recipe_url(@customer_recipe), notice: "Customer recipe was successfully updated." }
        format.json { render :show, status: :ok, location: @customer_recipe }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @customer_recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customer_recipes/1 or /customer_recipes/1.json
  def destroy
    @customer_recipe.destroy!

    respond_to do |format|
      format.html { redirect_to customer_recipes_url, notice: "Customer recipe was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer_recipe
      @customer_recipe = CustomerRecipe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_recipe_params
      params.require(:customer_recipe).permit(:name, :recipe_id, customer_diets_attributes: [:ingredient_id, :amount, :id, :_destroy])
    end

    def clone_recipeingredients(recipe, customer_recipe)
      recipe.recipeingredients.each do |element|
        customer_recipe.customer_diets.build(ingredient_id: element.ingredient_id, amount: element.amount)
      end
    end
end

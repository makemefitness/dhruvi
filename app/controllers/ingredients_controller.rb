class IngredientsController < ApplicationController
  before_action :set_ingredient, only: %i[ show edit update destroy ]

  PAGE_SIZE = 30
  def index
    @count = Ingredient.all.count
    @page = (params[:page] || 0).to_i
    # if params[:keywords].present?
    #   @keywords = params[:keywords]
    #   ingredient_search_term = IngredientSearchTerm.new(@keywords)
    #   @ingredients = Customer.where(
    #     ingredient_search_term.where_clause,
    #     ingredient_search_term.where_args
    #   ).order(ingredient_search_term.order).offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
    if params[:keywords].present?
      @ingredients = Ingredient.where('lower(name) LIKE :search', search: "#{params[:keywords].downcase}%")
    else
      @ingredients = Ingredient.all.offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
    end
    respond_to do |format|
      format.html
      format.json
    end
  end

  # GET /ingredients/1 or /ingredients/1.json
  def show
  end

  # GET /ingredients/new
  def new
    @ingredient = Ingredient.new
  end

  # GET /ingredients/1/edit
  def edit
  end

  # POST /ingredients or /ingredients.json
  def create
    @ingredient = Ingredient.new(ingredient_params)

    respond_to do |format|
      if @ingredient.save
        format.html { redirect_to ingredient_url(@ingredient), notice: "Ingredient was successfully created." }
        format.json { render :show, status: :created, location: @ingredient }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ingredients/1 or /ingredients/1.json
  def update
    respond_to do |format|
      if @ingredient.update(ingredient_params)
        format.html { redirect_to ingredient_url(@ingredient), notice: "Ingredient was successfully updated." }
        format.json { render :show, status: :ok, location: @ingredient }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ingredients/1 or /ingredients/1.json
  def destroy
    @ingredient.destroy!

    respond_to do |format|
      format.html { redirect_to ingredients_url, notice: "Ingredient was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ingredient
      @ingredient = Ingredient.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ingredient_params
      params.require(:ingredient).permit(:name, :energy, :protein, :fat, :carbohydrate)
    end
end

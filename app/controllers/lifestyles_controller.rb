class LifestylesController < ApplicationController
  before_action :set_lifestyle, only: %i[ show edit update destroy ]

  # GET /lifestyles or /lifestyles.json
  def index
    @lifestyles = Lifestyle.all
  end

  # GET /lifestyles/1 or /lifestyles/1.json
  def show
  end

  # GET /lifestyles/new
  def new
    @lifestyle = Lifestyle.new
  end

  # GET /lifestyles/1/edit
  def edit
  end

  # POST /lifestyles or /lifestyles.json
  def create
    @lifestyle = Lifestyle.new(lifestyle_params)

    respond_to do |format|
      if @lifestyle.save
        format.html { redirect_to lifestyle_url(@lifestyle), notice: "Lifestyle was successfully created." }
        format.json { render :show, status: :created, location: @lifestyle }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @lifestyle.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lifestyles/1 or /lifestyles/1.json
  def update
    respond_to do |format|
      if @lifestyle.update(lifestyle_params)
        format.html { redirect_to lifestyle_url(@lifestyle), notice: "Lifestyle was successfully updated." }
        format.json { render :show, status: :ok, location: @lifestyle }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @lifestyle.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lifestyles/1 or /lifestyles/1.json
  def destroy
    @lifestyle.destroy!

    respond_to do |format|
      format.html { redirect_to lifestyles_url, notice: "Lifestyle was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lifestyle
      @lifestyle = Lifestyle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def lifestyle_params
      params.require(:lifestyle).permit(:name, :description)
    end
end

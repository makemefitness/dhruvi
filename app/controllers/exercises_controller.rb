class ExercisesController < ApplicationController
  before_action :set_exercise, only: %i[ show edit update destroy ]

  # GET /exercises or /exercises.json
  def index
    @PAGE_SIZE = 6
    @exercises_count = Exercise.all.size
    @page = (params[:page] || 0).to_i
    if params[:target].present?
      puts "------------------------------------"
      @exercises = Target.find(params[:target]).exercises
    elsif params[:bodypart].present?
      @exercises = BodyPart.find(params[:bodypart]).exercises
    elsif  params[:keywords].present?
      @exercises = Exercise.where('lower(name) LIKE :search', search: "#{params[:keywords].downcase}%").offset(@PAGE_SIZE * @page).limit(6).order(:name)
    else
      @exercises = Exercise.all.offset(@PAGE_SIZE * @page).limit(6).order(:name)
    end
  end

  # GET /exercises/1 or /exercises/1.json
  def show
    @same_muscle_group = Exercise.where(body_part_id: @exercise.body_part_id)
    @same_equipment = Exercise.where(equipment_id: @exercise.equipment_id)
  end

  # GET /exercises/new
  def new
    @exercise = Exercise.new
  end

  # GET /exercises/1/edit
  def edit; end

  # POST /exercises or /exercises.json
  def create
    @exercise = Exercise.new(exercise_params)

    respond_to do |format|
      if @exercise.save
        format.html { redirect_to exercise_url(@exercise), notice: "Exercise was successfully created." }
        format.json { render :show, status: :created, location: @exercise }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @exercise.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exercises/1 or /exercises/1.json
  def update
    respond_to do |format|
      if @exercise.update(exercise_params)
        format.html { redirect_to exercise_url(@exercise), notice: "Exercise was successfully updated." }
        format.json { render :show, status: :ok, location: @exercise }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @exercise.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exercises/1 or /exercises/1.json
  def destroy
    @exercise.destroy!

    respond_to do |format|
      format.html { redirect_to exercises_url, notice: "Exercise was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise
      @exercise = Exercise.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exercise_params
      params.require(:exercise).permit(:gif, :name, :instructions, :equipment_id, :body_part_id, :target_id)
    end
end

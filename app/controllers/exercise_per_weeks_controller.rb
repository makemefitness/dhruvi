class ExercisePerWeeksController < ApplicationController
  before_action :set_exercise_per_week, only: %i[ show edit update destroy ]

  # GET /exercise_per_weeks or /exercise_per_weeks.json
  def index
    @exercise_per_weeks = ExercisePerWeek.all
  end

  # GET /exercise_per_weeks/1 or /exercise_per_weeks/1.json
  def show
  end

  # GET /exercise_per_weeks/new
  def new
    @exercise_per_week = ExercisePerWeek.new
  end

  # GET /exercise_per_weeks/1/edit
  def edit
  end

  # POST /exercise_per_weeks or /exercise_per_weeks.json
  def create
    @exercise_per_week = ExercisePerWeek.new(exercise_per_week_params)

    respond_to do |format|
      if @exercise_per_week.save
        format.html { redirect_to exercise_per_week_url(@exercise_per_week), notice: "Exercise per week was successfully created." }
        format.json { render :show, status: :created, location: @exercise_per_week }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @exercise_per_week.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exercise_per_weeks/1 or /exercise_per_weeks/1.json
  def update
    respond_to do |format|
      if @exercise_per_week.update(exercise_per_week_params)
        format.html { redirect_to exercise_per_week_url(@exercise_per_week), notice: "Exercise per week was successfully updated." }
        format.json { render :show, status: :ok, location: @exercise_per_week }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @exercise_per_week.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exercise_per_weeks/1 or /exercise_per_weeks/1.json
  def destroy
    @exercise_per_week.destroy!

    respond_to do |format|
      format.html { redirect_to exercise_per_weeks_url, notice: "Exercise per week was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise_per_week
      @exercise_per_week = ExercisePerWeek.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exercise_per_week_params
      params.require(:exercise_per_week).permit(:days, :additional_info)
    end
end

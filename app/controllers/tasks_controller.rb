class TasksController < ApplicationController
  before_action :set_customer, expect: [:destroy, :show]
  before_action :set_task, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token, only: :update

  # GET /tasks or /tasks.json
  def index
    @tasks = Task.all
  end

  # GET /tasks/1 or /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = @customer.tasks.new
  end

  # GET /tasks/1/edit
  def edit
    @task = @customer.tasks.find(params[:id])
  end

  # POST /tasks or /tasks.json
  def create
    @task = @customer.tasks.new(task_params)
    respond_to do |format|
      if @task.save
        format.html { redirect_to customer_path(@customer), notice: 'Training has been added!' }
        format.json { render :index, status: :created, location: @task }
        format.js {}
      else
        format.html { render :new }
        format.json { render json: @task.errors, status: :unprocessable_entity }
        format.js {}
      end
    end
  end

  # PATCH/PUT /tasks/1 or /tasks/1.json
  def update
    @task = Task.find(params[:id])
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to main_customer_path(@customer), notice: 'Training has been updated!' }
        format.json { render :index, status: :created, location: @task }
        format.js {}
      else
        format.html { render :new }
        format.json { render json: @task.errors, status: :unprocessable_entity }
        format.js {}
      end
    end
  end

  # DELETE /tasks/1 or /tasks/1.json
  def destroy
    @task.destroy!

    respond_to do |format|
      format.html { redirect_to tasks_url, notice: "Task was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_task
    @task = Task.find(params[:id])
  end

  def set_customer
    @customer = Customer.find(params[:customer_id])
  end

  # Only allow a list of trusted parameters through.
  def task_params
    params.require(:task).permit(:exercise_id, :date, :time, :marks, :is_complete)
  end
end

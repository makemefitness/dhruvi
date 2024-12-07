class AppointmentsController < ApplicationController
  before_action :authenticate_user_or_customer
  before_action :set_appointment, only: %i[update destroy]
  before_action :set_customer, only: [:new, :create]
  before_action :set_time, only: [:new]

  def index
    if user_signed_in?
      @appointments = current_user.appointments
    elsif customer_signed_in?
      @appointments = current_customer.appointments
    else
      @appointments = []
    end
  end

  def new
    @appointment = Appointment.new(customer: @customer, start_time: @datetime, end_time: @datetime)
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if user_signed_in?
      @appointment.user = current_user
    elsif customer_signed_in?
      @appointment.customer = current_customer
    end

    if @appointment.save
      redirect_to appointments_path, notice: 'Appointment was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @appointment.update(appointment_params)
      redirect_to appointments_path, notice: 'Appointment was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment.destroy
    redirect_to appointments_path, notice: 'Appointment was successfully cancelled.'
  end

  private

  def authenticate_user_or_customer
    redirect_to new_user_session_path unless user_signed_in? || customer_signed_in?
  end

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def set_customer
    @customer = Customer.find(params[:customer_id]) if params[:customer_id]
  end

  def set_time
    @datetime = params[:start_time] ? Date.parse(params[:start_time]) : DateTime.now.strftime("%Y-%m-%d %H:%M")
  end

  def appointment_params
    params.require(:appointment).permit(:customer_id, :start_time, :end_time, :status)
  end
end

class ApplicationController < ActionController::Base
  layout :layout_by_resource
  before_action :authenticate
  # before_action :configure_permitted_parameters, if: :devise_controller?

  def authenticate
    if devise_controller?
      return
    end
    unless current_login_in != false
      redirect_to root_path
    end
    # if current_user && current_user.account.nil?
    #   redirect_to new_accounts_path
    # end
  end

  def after_sign_in_path_for(resource)
    if resource.is_a?(User)
      '/main/dashboard'
      # '/static_pages/usershome'
    else
      '/main/customer'
    end
  end

  # rescue_from ActiveRecord::RecordNotFound do
  #   flash[:warning] = 'Resource not found.'
  #   redirect_back_or root_path
  # end
  
  # def redirect_back_or(path)
  #   redirect_to request.referer || path
  # end

  private

  # Choose layout dynamically based on context
  def layout_by_resource
    if devise_controller?
      "application"
    elsif current_user
      "application"
    elsif current_customer
      "customer"
    else
      "landing"
    end
  end


  def current_login_in
    if current_customer.present?
      current_customer
    elsif current_user.present?
      current_user
    else
      false
    end
  end

  def get_type_of_login
    current_login_in == current_customer ? "Customer" : "User"
  end
end

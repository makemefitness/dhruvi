class ApplicationController < ActionController::Base
  layout :layout_by_resource
  # before_action :configure_permitted_parameters, if: :devise_controller?

  def authenticate
    unless current_login_in != false
      redirect_to new_admin_customer_session_path
    end
    if current_admin_user && current_admin_user.account.nil?
      redirect_to new_accounts_path
    end
  end

  protected

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(:sign_in){|u| u.permit(:login, :email, :password, :password_confirmation, :remember_me)}
  #   devise_parameter_sanitizer.permit(:sign_up) do |user_params|
  #     user_params.permit(:username, :email, :password, :password_confirmation, :remember_me, :avatar)
  #   end
  #   # devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation, :current_password) }
  # end

  def after_sign_in_path_for(resource)
    if resource.is_a?(User)
      '/main/dashboard'
      # '/static_pages/usershome'
    else
      '/main/customer'
    end
  end

  def layout_by_resource
    if devise_controller?
      "application"
    else
      "landing"
    end
  end
end

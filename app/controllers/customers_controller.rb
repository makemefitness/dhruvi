class CustomersController < ApplicationController
  before_action :authenticate_user!, expect: [:create, :update]
  PAGE_SIZE = 15
  def index
    @count = Customer.all.count
    @page = (params[:page] || 0).to_i
    if params[:keywords].present?
      @keywords = params[:keywords]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer.where(
        customer_search_term.where_clause,
        customer_search_term.where_args
      ).order(customer_search_term.order).offset(PAGE_SIZE * @page).limit(15)
    else
      @customers = Customer.all.offset(PAGE_SIZE * @page).limit(15)
    end
  end

  def new
    @customer = Customer.new
  end

  private

  def set_customer
    # @customer = current_admin_user.people.with_attached_avatar2.friendly.find(params[:id])
  end

  def customer_params
    params.require(:customer).permit(:avatar, :first_name, :last_name, :email, :username, :phone_number, :sex, :age, :height, :weight, :password, :password_confirmation)
  end
end

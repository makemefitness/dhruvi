class CustomersController < ApplicationController
  before_action :authenticate_user!, expect: %i[create update]
  before_action :set_customer, only: %i[show edit update]
  PAGE_SIZE = 15
  def index
    @count = Customer.all.count
    @page = (params[:page] || 0).to_i
    if params[:keywords].present?
      customer_search_by_term
    else
      @customers = Customer.all.offset(PAGE_SIZE * @page).limit(15)
    end
  end

  def new
    @customer = Customer.new
  end

  def show; end

  def edit; end

  def update
    respond_to do |format|
      @customer.avatar = try_create_and_upload_blob!(customer_params.fetch(:avatar, nil)) unless customer_params[:avatar].nil?
      if @customer.update(customer_params)
        @customers = Goal.all
        format.html { redirect_to customer_path(@customer), notice: 'The customer\'s personal data has been updated.' }
        format.json { render :show, status: :ok, location: @customer }
        format.js { render action: "index", notice: "Updated #{@customer.name}" }
      else
        format.html { render :edit }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
        format.js { render :edit}
      end
    end    
  end

  private

  def set_customer
    @customer = Customer.find(params[:id])
  end

  def customer_params
    params.require(:customer).permit(:avatar, :first_name, :last_name, :email, :username, :phone_number, :sex, :age, :height, :weight, :body_type_id, :password, :password_confirmation)
  end

  def customer_search_by_term
    @keywords = params[:keywords]
    customer_search_term = CustomerSearchTerm.new(@keywords)
    @customers = Customer.where(
      customer_search_term.where_clause,
      customer_search_term.where_args
    ).order(customer_search_term.order).offset(PAGE_SIZE * @page).limit(15)
  end

  # This can also be put somewhere as a static method for reuse in different controllers.
  def try_create_and_upload_blob!(uploaded_file)
    return nil if uploaded_file.blank?

    ActiveStorage::Blob.create_and_upload!(
      io: uploaded_file.to_io,
      filename: uploaded_file.original_filename,
    )
  end
end

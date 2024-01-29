module ControllerMacros
  def login_user
    # Before each test, create and login the user
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      sign_in FactoryBot.create(:user)
    end
  end

  def login_customer
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:customer]
      customer = FactoryBot.create(:customer)
      customer.confirm! # or set a confirmed_at inside the factory. Only necessary if you are using the "confirmable" module
      sign_in customer
    end
  end
end
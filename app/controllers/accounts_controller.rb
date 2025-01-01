class AccountsController < ApplicationController
  def new
    redirect_to root_path unless current_user.account.nil?
    @account = Account.new
  end

  def create
    @account = Account.new(account_params, owner: current_user)
    if @account.save
      redirect_to root_path, success: "Your account has been created!"
    else
      render :new
    end
  end

  private

  def account_params
    params.require(:account).permit(:name)
  end
end

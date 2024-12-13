class MessagesController < ApplicationController
  before_action :authenticate

  def new
    session[:user] = false
    if params[:query] == "Users"
      @chosen_recipient = User.find_by(id: params[:to].to_i) if params[:to]
      session[:user] = true
    else
      @chosen_recipient = Customer.find_by(id: params[:to].to_i) if params[:to]
      session[:user] = false
    end
    respond_to do |format|
      format.html {}
      format.js {}
    end
  end

  def create
    recipients = get_receipents
    conversation = current_login_in.send_message(recipients, params[:message][:body], params[:message][:subject]).conversation
    session[:user] = false
    flash[:success] = "Wiadomość została wysłana!"
    respond_to do |format|
      format.html { get_type_of_login == 'User' ? (redirect_to conversation_path(conversation)) : (redirect_to main_customer_path)  }
      format.js { redirect_to conversation_path(conversation) }
    end
  end

  private
  def get_receipents

    if get_type_of_login == 'User'
      Customer.where(id: params['recipients'])
    elsif get_type_of_login == 'Customer'
      User.where(id: params['recipients'])
    end
  end
end
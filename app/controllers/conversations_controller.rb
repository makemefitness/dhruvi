class ConversationsController < ApplicationController
  before_action :authenticate
  before_action :get_mailbox
  before_action :get_conversation, except: [:index]

  def index
    @conversations = @mailbox.inbox.paginate(page: params[:page], per_page: 10)
    @sent_items = @mailbox.sentbox.paginate(page: params[:page], per_page: 10)
    @trash_items = @mailbox.trash.paginate(page: params[:page], per_page: 10)
  end

  def show
    if current_customer
      redirect_to main_customer_path
    end
  end

  def reply
    if current_customer
      current_customer.reply_to_conversation(@conversation, params[:body])
    else
      current_user.reply_to_conversation(@conversation, params[:body])
    end
    flash[:success] = 'Reply sent'
    redirect_to conversation_path(@conversation)
  end

  private

  def get_mailbox
    @mailbox ||= current_user ? current_user.mailbox : current_customer.mailbox
  end

  def get_conversation
    @conversation ||= @mailbox.conversations.find(params[:id])
  end
end
class ConversationsController < ApplicationController
  before_action :authenticate
  before_action :get_mailbox
  before_action :get_conversation, except: [:index, :empty_trash]
  before_action :get_box, only: [:index]

  def index
    get_conversations
    current_customer && (redirect_to main_customer_path)
  end

  def show
    # get_conversations
    @box = detect_mailbox(@conversation)
    current_customer && (redirect_to main_customer_path)
  end

  def reply
    if current_customer
      current_customer.reply_to_conversation(@conversation, params[:body])
    else
      current_user.reply_to_conversation(@conversation, params[:body])
    end
    flash.now[:success] = 'Reply sent'
    redirect_to conversation_path(@conversation)
  end

  def destroy
    current_user && @conversation.move_to_trash(current_user)
    current_customer && @conversation.move_to_trash(current_customer)
    flash[:success] = 'The conversation was moved to trash.'
    redirect_to conversations_path
  end
  
  def restore
    @conversation.untrash(current_user)
    flash[:success] = 'The conversation was restored.'
    redirect_to conversations_path
  end

  def empty_trash
    @mailbox.trash.each do |conversation|
      conversation.receipts_for(current_user).update_all(deleted: true)
    end
    flash[:success] = 'Your trash was cleaned!'
    redirect_to conversations_path
  end

  def mark_as_read
    current_user && @conversation.mark_as_read(current_user)
    current_customer && @conversation.mark_as_read(current_customer)
    flash[:success] = 'The conversation was marked as read.'
    redirect_to conversations_path
  end

  private

  def get_mailbox
    @mailbox ||= current_user ? current_user.mailbox : current_customer.mailbox
  end

  def get_conversation
    @conversation ||= @mailbox.conversations.find(params[:id])
  end

  def get_box
    if params[:box].blank? or !["inbox","sent","trash"].include?(params[:box])
      params[:box] = 'inbox'
    end
    @box = params[:box]
  end

  def get_conversations
    if @box.eql? "inbox"
      @conversations = @mailbox.inbox
    elsif @box.eql? "sent"
      @conversations = @mailbox.sentbox
    else
      @conversations = @mailbox.trash
    end
    @conversations = @conversations.paginate(page: params[:page], per_page: 10)
  end

  def detect_mailbox(conversation)
    if conversation.is_deleted?(current_user)
      'trash'
    elsif conversation.is_unread?(current_user)
      'inbox'
    else
      'sent'
    end
  end
end
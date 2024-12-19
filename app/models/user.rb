class User < ApplicationRecord
  attr_accessor :login

  has_one_attached :avatar
  has_many :appointments, dependent: :destroy
  has_many :messages
  has_many :customers, through: :messages
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, uniqueness: true
  validates :email, presence: true

  acts_as_messageable


  # Overide the lookup function that Devise uses when performing
  # a sig_in
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end

  def remember_me
    true
  end

  def name
    email
  end

  def mailboxer_email(object)
    nil # Return the user's email or `nil` if you want to disable email notifications
  end

  def unread_messages
    mailbox.receipts.where(is_read: false)
  end
end

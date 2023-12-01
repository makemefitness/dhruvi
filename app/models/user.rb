class User < ApplicationRecord

  attr_accessor :login
  has_one_attached :avatar
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, uniqueness: true
  validates :email, presence: true


  #Overide the lookup function that Devise uses when performing
  # a sig_in
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end
end

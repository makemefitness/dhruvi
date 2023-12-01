class Customer < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  #Overide the lookup function that Devise uses when performing
  # a sig_in
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end

  attr_accessor :login
  validates :email, uniqueness: true
  validates :email, presence: true
  validates :username, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone_number, presence: true
  validates :sex, presence: true
  validates :age, presence: true
  validates :height, presence: true
  validates :weight, presence: true
  
  def bmr
    if self.sex == true
      (9.99 * self.weight.to_f) + (6.25 * self.height.to_f) - (4.92 * (self.age).to_f) + 5.0
    else
      (9.99 * self.weight.to_f) + (6.25 * self.height.to_f) - (4.92 * (self.age).to_f) - 161.0
    end
  end
end

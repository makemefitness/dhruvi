class Customer < ApplicationRecord
  attr_accessor :login

  has_one_attached :avatar
  has_one :body_type
  has_one :profil, dependent: :destroy
  has_many :tasks
  has_many :exercises, through: :tasks
  has_many :diet_sets

  # Default sex
  enum sex: [:man, :woman]
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Overide the lookup function that Devise uses when performing
  # a sig_in
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end

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
    tmp = (9.99 * weight.to_f) + (6.25 * height.to_f) - (4.92 * actual_age.to_f)
    sex == :man ? tmp + 5 : tmp - 161.0
  end

  def name
    first_name + " " + last_name
  end

  def tdee
    profil ? bmr * styl_iloraz + cel : 0
  end

  def styl_iloraz
    lifestyle ? lifestyle.description.to_f : 100
  end

  def cel
    profil.goal_kcal
  end

  def lifestyle
    Lifestyle.where(id: profil.lifestyle_id).first
  end
  
  def actual_age
    DateTime.now.year - age
  end

  def body_type
    return BodyType.find(body_type_id).name if body_type_id.present?

    'Not set up'
  end

  ransack_alias :name, :customer_first_name_or_customer_last_name_or_customer_email
end

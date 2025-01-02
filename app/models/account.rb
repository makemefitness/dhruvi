class Account < ApplicationRecord
  belongs_to :owner, class_name: 'User'
  has_many :users, dependent: :destroy
  # has_many :teams, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :subdomain, uniqueness: true, allow_nil: true

  before_create :generate_subdomain
  after_create :add_owner_to_users

  private

  def generate_subdomain
    self.subdomain = name.parameterize unless subdomain.present?
  end

  def add_owner_to_users
    users << owner
  end
end

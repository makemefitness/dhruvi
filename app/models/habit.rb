class Habit < ApplicationRecord
  validates :name, presence: true
  has_and_belongs_to_many :profiles, class_name: 'Profil', join_table: :habits_profiles

  def customers_amount
    profiles.size
  end

  def has_customers?
    self.customers_amount.positive?
  end

  scope :for_display, -> { order(:name) }
end

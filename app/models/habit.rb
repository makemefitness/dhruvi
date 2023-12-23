class Habit < ApplicationRecord
  validates :name, presence: true

  def customers_amount
    10
    # self.profils.size
  end

  def has_customers?
    true
    # self.customers_amount > 0
  end

  scope :for_display, -> { order(:name) }
end

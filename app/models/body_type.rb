class BodyType < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :neat, presence: true
  validates :description, presence: true

  def customers?
    Customer.where(body_type_id: id)
  end

  def customers
    customers? ? Customer.where(body_type_id: id).size : 0
  end
end

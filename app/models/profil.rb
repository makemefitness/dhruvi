class Profil < ApplicationRecord
  belongs_to :customer
  has_one :goal
  has_one :lifestyle
  has_and_belongs_to_many :habits, join_table: :habits_profiles

  def goal
    goal_id ? Goal.find(goal_id).name : ""
  end

  def lifestyle
    lifestyle_id ? Lifestyle.find(lifestyle_id).name : ""
  end
end

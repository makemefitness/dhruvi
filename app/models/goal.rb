class Goal < ApplicationRecord
  validates :name, presence: true
  ###############################
  def self.count_of_profiles(id)
    Profil.where(goal_id: id).size
  end

  def self.has_profiles?(id)
    self.count_of_profiles(id) > 0
  end
end

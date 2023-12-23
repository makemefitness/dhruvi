class Goal < ApplicationRecord
  validates :name, presence: true
  ###############################
  def self.count_of_profiles(id)
    10 # Profil.where(admin_goal_id: id).size
  end

  def self.has_profiles?(id)
    true # self.count_of_profiles(id) > 0
  end
end

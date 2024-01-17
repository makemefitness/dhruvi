class Lifestyle < ApplicationRecord
  validates :name, presence: true
  
  def self.profiles(id)
    Profil.where(lifestyle_id: id).size
  end

  def self.has_profiles?(id)
    self.profiles(id) > 0
  end
end

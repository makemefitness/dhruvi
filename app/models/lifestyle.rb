class Lifestyle < ApplicationRecord
  validates :name, presence: true
  
  def self.profiles(id)
    10 #Profil.where(lifestyle_id: id).size
  end

  def self.has_profiles?(id)
    true #self.profiles(id) > 0
  end
end

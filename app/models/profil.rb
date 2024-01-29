class Profil < ApplicationRecord
  belongs_to :customer
  has_one :goal
  has_one :lifestyle
  has_and_belongs_to_many :habits, join_table: :habits_profiles

  def profil_url
    "/customers/#{customer.id}/profil.json"
  end

  def goal
    goal_id ? Goal.find(goal_id).name : ""
  end

  def lifestyle
    lifestyle_id ? Lifestyle.find(lifestyle_id).name : ""
  end

  def l_kcal
    lifestyle_id ? Lifestyle.find(lifestyle_id).description.to_f : 0  
  end

  def goal_kcal
    Goal.where(id: self.goal_id).first.description.to_f
  end

  def weight_protein
    (self.protein*self.customer.weight).round(0)
  end

  def weight_carbohydrate
    (self.carbohydrate*self.customer.weight).round(0)
  end
  def weight_fat
    (self.fat*self.customer.weight).round(0)
  end


  ########################################################################
  def dayly_carbohydrate
    (self.weight_carbohydrate*0.23).round(0)
  end

  def dayly_protein
    (self.weight_protein*0.23).round(0)
  end

  def dayly_fat
    (self.weight_fat*0.23).round(0)
  end
  ######################################################################

  def przekoski_carbohydrate
    (self.weight_carbohydrate*0.31/2).round(0)
  end

  def przekoski_protein
    (self.weight_protein*0.31/2).round(0)
  end

  def przekoski_fat
    (self.weight_fat*0.31/2).round(0)
  end

  ######################################################################


  def wspolczynnik_nieznany
    puts "------------------------------------"
    if self.protein == 0.0
      self.protein = result/4.round(2)
    elsif self.carbohydrate == 0.0
      self.carbohydrate = result/4.round(2)
    elsif self.fat == 0.0
      self.fat = result/9.round(2)
    end
  end

  def result
    (self.customer.tdee - self.customer.weight*self.protein*4 - self.customer.weight*self.carbohydrate*4 - self.customer.weight*self.fat*9)/self.customer.weight
  end
end

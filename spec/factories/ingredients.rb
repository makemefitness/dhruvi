FactoryBot.define do
  factory :ingredient do
    name { 'apple' }
    energy { 100 }
    protein { 110 }
    fat { 20 }
    carbohydrate { 30 }
  end
end

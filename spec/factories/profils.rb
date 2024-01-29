FactoryBot.define do
  factory :profil do
    association :customer, factory: :customer, strategy: :build
    goal_id { 2 }
    lifestyle_id { 4 }
    contusions { 'Broken hands' }
    sickness { "Asthma\r\n" }
    description { '' }
    protein { 5.0 }
    carbohydrate { 3.0 }
    fat { 2.0 }
  end
end

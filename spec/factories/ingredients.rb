FactoryBot.define do
  factory :ingredient do
    sequence(:name) { |n| "Ingredient #{n}" }
    energy { rand(50..150) }
    protein { rand(10..50) }
    fat { rand(5..25) }
    carbohydrate { rand(10..60) }
  end
end

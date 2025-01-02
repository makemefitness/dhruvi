FactoryBot.define do
  factory :account do
    name { "MyString" }
    association :owner, factory: :user
  end
end
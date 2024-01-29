FactoryBot.define do
  factory :recipe do
    id { 1 }
    name { 'testowa' }
    preparation { 'preparation' }
    summary { 'summary' }
    link { 'http://example.com' }
    after(:build) do |recipe|
      recipe.photo.attach(io: File.open(Rails.root.join('spec', 'photos', 'user1.jpg')), filename: 'user1.jpg', content_type: 'image/jpeg')
    end
  end
end

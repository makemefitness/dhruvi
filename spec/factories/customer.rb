FactoryBot.define do
  factory :customer do
    id { 1 }
    username { 'nick' }
    email { 'test@test.com' }
    password { "abcdefgh" }
    first_name { "Maciej" }
    last_name { "Sypniewski" }
    phone_number { "1234567890" }
    age { 1979 }
    height { 174 }
    weight { 65 }
    sex { 1 }
  end
end
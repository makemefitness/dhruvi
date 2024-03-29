# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

#----------------------------------------------------------------------------------
# Customers
#----------------------------------------------------------------------------------

# 35_000.times do |i|
#   Customer.create!(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     username: "#{Faker::Internet.user_name}#{i}",
#     email: Faker::Internet.user_name + i.to_s + "@#{Faker::Internet.domain_name}",
#     phone_number: Faker::PhoneNumber.phone_number,
#     sex: true,
#     age: 30,
#     height: 174
#   )
#   print '.' if i % 1000 == 0
# end

#----------------------------------------------------------------------------------
# Ingredients
#----------------------------------------------------------------------------------
# lines = File.open("db/TABELA_WARTOSCI_ODZYWCZYCH.csv").readlines
# puts 'Plik otwarty'
# lines.delete("\n")
# # convert array of string to arra of arrays
# new_lines = lines.map do |line|
#   # create array from string
#   line = line.chomp.split('"')
#   line.delete(',')
#   # line = line.flatten(1)
#   line.delete("")
#   index = 0
#   line.delete(".")
#   line.delete(",,")
#   line = line.map do |element|

#     line.delete(".")
#     line.delete(",,")
#     element.sub!(" g", '')
#     unless line[0] == element
#       element.sub!(',', '.').to_f
#     end
#     element.sub!(/,$/, '');
#     if element =~ / kcal,$/ || element =~ / kcal$/
#       element.sub!(/ kcal,$/, '')
#       element.sub!(/ kcal$/, '')
#       element = element.split(",")
#     end

#     if element.class == Array
#       if element.length == 1
#         element = element[0].sub!('.', '').to_f
#       end
#     end

#     index = index + 1

#     element
#   end

#   line.flatten!
#   line = line.map do |element|

#     if element != line[0]
#       element = element.to_f
#     else
#       element = element
#     end
#   end
#   if line.length == 4
#     line[0].sub!(' kcal', '')
#     tmp_array = line[0].split(',')
#     tmp_name = tmp_array[0]
#     tmp_kcal = tmp_array[1]
#     line[0] = tmp_kcal
#     line.unshift(tmp_name)
#     # puts line
#     line
#   else
#     line
#   end
# end
# new_lines.each_index do |i|
#   if new_lines[i].length == 1
#     new_lines.delete_at(i)
#   end
# end
# new_lines.each_index do |line|
#   puts "#{new_lines[line]}"
# end

# new_lines.each do |line|
#   Ingredient.create!(
#     name: line[0],
#     energy: line[1],
#     protein: line[2],
#     fat: line[3],
#     carbohydrate: line[4],
#   )
# end

# BodyType.create!(
#   name: 'Ectomorphic',
#   neat: '700,900',
#   description: 'A tall, slender person with long limbs.'
# )
# BodyType.create!(
#   name: 'Mesomorphic',
#   neat: '400,500',
#   description: 'A strong, muscular, well-built person.'
# )
# BodyType.create!(
#   name: 'Endomorphic',
#   neat: '200,400',
#   description: 'A squat, round person.'
# )

# Customer.create!(
#   first_name: 'Maciej',
#   last_name: 'Sypniewski',
#   username: 'Maciej',
#   email: 'msypniewski511@gmail.com',
#   phone_number: '000-000-000',
#   password: '123456',
#   password_confirmation: '123456', 
#   sex: true,
#   age: 39,
#   height: 174,
#   weight: 67
# )

# Customer.create!(
#   first_name: 'Rysiek',
#   last_name: 'Sypniewski',
#   username: 'Rysiek',
#   email: 'richsoft@yahoo.co.uk',
#   phone_number: '000-000-001',
#   password: '123456',
#   password_confirmation: '123456',
#   sex: true,
#   age: 63,
#   height: 154,
#   weight: 100
# )

# Lifestyle.create!(
#   name: 'Office workf',
#   description: 'Office workf'
# )

# Lifestyle.create!(
#   name: 'Physical work',
#   description: 'Physical work'
# )

# Lifestyle.create!(
#   name: 'Shift work',
#   description: 'Shift work'
# )

# Lifestyle.create!(
#   name: 'Mixed work, physical and mental, all day long',
#   description: 'Mixed work, physical and mental, all day long'
# )

# Goal.create!(
#   name: 'Reduction',
#   description: 'Reduction'
# )

# Goal.create!(
#   name: 'Adjust body weight',
#   description: 'Adjust body weight'
# )

# Goal.create!(
#   name: 'Improvement of quality',
#   description: 'Improvement of quality'
# )

# Goal.create!(
#   name: 'Motor training, strength, speed, endurance',
#   description: 'Motor training, strength, speed, endurance'
# )

# ExercisePerWeek.create!(
#   days: 1
# )

# ExercisePerWeek.create!(
#   days: 2
# )

# ExercisePerWeek.create!(
#   days: 3
# )

# ExercisePerWeek.create!(
#   days: 4
# )

# ExercisePerWeek.create!(
#   days: 5
# )

# ExercisePerWeek.create!(
#   additional_info: 'additional activity - field to enter in time and type'
# )

# Habit.create!(
#   name: 'I eat a lot of sugar in my diet',
#   description: 'I eat a lot of sugar in my diet'
# )

# Habit.create!(
#   name: 'I dont sleep well',
#   description: 'I dont sleep well'
# )

# Habit.create!(
#   name: 'I drink a lot of coffee',
#   description: 'I drink a lot of coffee'
# )

# Habit.create!(
#   name: 'I am snacking',
#   description: 'I am snacking'
# )

# Habit.create!(
#   name: 'Alcohol',
#   description: 'Alcohol'
# )

# Habit.create!(
#   name: 'I digest food poorly',
#   description: 'I digest food poorly'
# )

# Habit.create!(
#   name: 'Other...',
#   description: 'Other...'
# )


# Equipments
["assisted","band","barbell","body weight","bosu ball","cable","dumbbell","elliptical machine","ez barbell","hammer","kettlebell","leverage machine","medicine ball","olympic barbell","resistance band","roller","rope","skierg machine","sled machine","smith machine","stability ball","stationary bike","stepmill machine","tire","trap bar","upper body ergometer","weighted","wheel roller"].each do |equipment|
  Equipment.find_or_create_by!(name: equipment)
end

# Body parts
["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"].each do |body_part|
  BodyPart.find_or_create_by!(name: body_part)
end

# targets
["abductors","abs","adductors","biceps","calves","cardiovascular system","delts","forearms","glutes","hamstrings","lats","levator scapulae","pectorals","quads","serratus anterior","spine","traps","triceps","upper back"].each do |target|
  Target.find_or_create_by!(name: target)
end
puts
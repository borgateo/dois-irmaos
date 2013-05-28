# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts '---- SETTING UP DEFAULT USER LOGIN ----'
user = User.create! :name => ENV['ADMIN_NAME'], :email => ENV['ADMIN_EMAIL'], :password => ENV['ADMIN_PASSWORD'], :password_confirmation => ENV['ADMIN_PASSWORD']
puts 'New user created: ' << user.name

user2 = User.create! :name => ENV['ADMIN2_NAME'], :email => ENV['ADMIN2_EMAIL'], :password => ENV['ADMIN2_PASSWORD'], :password_confirmation => ENV['ADMIN2_PASSWORD']
puts 'New user created: ' << user2.name
puts '---- Done! ----'
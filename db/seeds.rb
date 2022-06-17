Worker.delete_all
Service.delete_all
Comment.delete_all

10.times do
  Worker.create(
    first_name: Faker::Name.first_name
    last_name: Faker::Name.last_name
    image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['person'])
  )
end

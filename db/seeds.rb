Worker.delete_all
Service.delete_all
Comment.delete_all

10.times do
  @worker = Worker.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['person'])
    )

    3.times do
      Service.create(
        name: Faker::Construction.trade,
        desc: Faker::Construction.subcontract_category,
        location: Faker::Address.community,
        worker_id: @worker.id
      )
    4.times do   
      Comment.create(
        subject: Faker::Marketing.buzzwords,
        body: Faker::Movies::HitchhikersGuideToTheGalaxy.quote
      )
    end
  end
end

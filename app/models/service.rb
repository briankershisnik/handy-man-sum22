class Service < ApplicationRecord
  belongs_to :worker
  validates :name, :desc, :location, presence: true
end

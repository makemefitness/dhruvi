class Task < ApplicationRecord
  belongs_to :customer
  belongs_to :exercise
end

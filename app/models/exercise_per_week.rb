class ExercisePerWeek < ApplicationRecord
  validates :days, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 7 }
end

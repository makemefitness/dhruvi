class CreateExercisePerWeeks < ActiveRecord::Migration[7.1]
  def change
    create_table :exercise_per_weeks do |t|
      t.integer :days, null: false, default: 0
      t.string :additional_info

      t.timestamps
    end
  end
end

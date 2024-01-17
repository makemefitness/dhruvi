class CreateExercises < ActiveRecord::Migration[7.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.text :instructions
      t.references :equipment, null: false, foreign_key: true
      t.references :body_part, null: false, foreign_key: true
      t.references :target, null: false, foreign_key: true

      t.timestamps
    end
  end
end

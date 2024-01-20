class CreateDietSets < ActiveRecord::Migration[7.1]
  def change
    create_table :diet_sets do |t|
      t.string :name
      t.references :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end

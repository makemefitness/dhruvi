class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.references :customer, null: false, foreign_key: true
      t.references :exercise, null: false, foreign_key: true
      t.date :date
      t.integer :time
      t.boolean :is_complete
      t.text :marks

      t.timestamps
    end
  end
end

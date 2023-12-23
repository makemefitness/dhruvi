class CreateHabits < ActiveRecord::Migration[7.1]
  def change
    create_table :habits do |t|
      t.string :name, null: false, default: 'None'
      t.string :description

      t.timestamps
    end
  end
end

class CreateProfils < ActiveRecord::Migration[7.1]
  def change
    create_table :profils do |t|
      t.integer :customer_id
      t.integer :goal_id
      t.integer :lifestyle_id
      t.string :contusions
      t.string :sickness
      t.string :description

      t.timestamps
    end
    add_index :profils, :customer_id
  end
end

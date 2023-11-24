class CreateCustomers < ActiveRecord::Migration[7.1]
  def change
    create_table :customers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :username, null: false
      t.string :phone_number, null: false
      t.boolean :sex, null: false
      t.integer :age, null: false
      t.integer :height, null: false

      t.timestamps
    end

    add_index :customers, :email, unique: true
    add_index :customers, :username, unique: true
    add_index :customers, "lower(last_name) varchar_pattern_ops"
    add_index :customers, "lower(first_name) varchar_pattern_ops"
    add_index :customers, "lower(email)"
  end
end

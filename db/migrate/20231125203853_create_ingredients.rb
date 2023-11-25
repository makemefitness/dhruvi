class CreateIngredients < ActiveRecord::Migration[7.1]
  def change
    create_table :ingredients do |t|
      t.string :name, null: false
      t.integer :energy, null: false
      t.integer :protein, null: false
      t.integer :fat, null: false
      t.integer :carbohydrate, null: false

      t.timestamps
    end
  end
end

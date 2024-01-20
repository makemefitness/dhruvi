class CreateCustomerRecipes < ActiveRecord::Migration[7.1]
  def change
    create_table :customer_recipes do |t|
      t.string :name
      t.references :recipe, null: false, foreign_key: true
      t.references :diet_set, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateCustomerDiets < ActiveRecord::Migration[7.1]
  def change
    create_table :customer_diets do |t|
      t.references :customer_recipe, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end

class CreateRecipes < ActiveRecord::Migration[7.1]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :ingredients, null: false
      t.text :preparation
      t.string :summary
      t.string :link

      t.timestamps
    end
  end
end

class CreateBodyTypes < ActiveRecord::Migration[7.1]
  def change
    create_table :body_types do |t|
      t.string :name, null: false
      t.string :neat, null: false
      t.string :description

      t.timestamps
    end
  end
end

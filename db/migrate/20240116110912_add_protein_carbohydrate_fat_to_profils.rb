class AddProteinCarbohydrateFatToProfils < ActiveRecord::Migration[7.1]
  def change
    add_column :profils, :protein, :float, default: 0
    add_column :profils, :carbohydrate, :float, default: 0
    add_column :profils, :fat, :float, default: 0
  end
end

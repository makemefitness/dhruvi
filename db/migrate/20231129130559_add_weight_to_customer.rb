class AddWeightToCustomer < ActiveRecord::Migration[7.1]
  def change
    add_column :customers, :weight, :integer
  end
end

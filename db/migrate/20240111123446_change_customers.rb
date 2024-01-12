class ChangeCustomers < ActiveRecord::Migration[7.1]
  def change
    remove_column :customers, :sex
    add_column :customers, :sex, :integer
    add_reference :customers, :body_type
  end
end

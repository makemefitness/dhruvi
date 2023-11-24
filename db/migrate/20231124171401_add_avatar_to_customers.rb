class AddAvatarToCustomers < ActiveRecord::Migration[7.1]
  def change
    add_column :customers, :avatar, :string
  end
end

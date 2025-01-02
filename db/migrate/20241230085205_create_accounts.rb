class CreateAccounts < ActiveRecord::Migration[7.1]
  def change
    # Create the accounts table
    create_table :accounts do |t|
      t.string :name
      t.string :subdomain
      t.references :owner, null: false, foreign_key: { to_table: :users }
      t.jsonb :settings, null: false, default: {}

      t.timestamps
    end

    # Add an index on the settings column for JSONB search capabilities
    add_index :accounts, :settings, using: :gin

    # Add account reference to the users table
    change_table :users do |t|
      t.references :account, foreign_key: true, null: true
    end
  end
end

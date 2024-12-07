class CreateAppointments < ActiveRecord::Migration[7.1]
  def change
    create_table :appointments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :customer, null: false, foreign_key: true
      t.datetime :start_time
      t.datetime :end_time
      t.integer :status
      t.text :description

      t.timestamps
    end
  end
end

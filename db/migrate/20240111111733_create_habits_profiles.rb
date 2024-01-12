class CreateHabitsProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :habits_profiles, id: false do |t|
      t.references :habit, null: false, foreign_key: true
      t.references :profil, null: false, foreign_key: true

      t.timestamps
    end
  end
end

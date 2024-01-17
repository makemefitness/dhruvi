json.extract! exercise, :id, :name, :instructions, :equipment_id, :body_part_id, :target_id, :created_at, :updated_at
json.url exercise_url(exercise, format: :json)

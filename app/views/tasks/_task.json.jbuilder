json.extract! task, :id, :customer_id, :exercise_id, :date, :time, :is_complete, :marks, :created_at, :updated_at
json.url task_url(task, format: :json)

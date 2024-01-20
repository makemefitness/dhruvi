json.extract! customer_recipe, :id, :name, :recipe_id, :diet_set_id, :created_at, :updated_at
json.url customer_recipe_url(customer_recipe, format: :json)

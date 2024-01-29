json.extract! recipe, :id, :photo, :name, :preparation, :summary, :link, :ingredients, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
# json.photo url_for(recipe.photo)

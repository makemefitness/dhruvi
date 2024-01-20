json.recipes do
  json.array!(@recipes) do |recipe|
    json.id recipe.id
    json.name recipe.name
    json.url admin_recipe_path(recipe)
  end
end
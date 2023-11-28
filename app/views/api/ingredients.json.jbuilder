json.ingredients do
  json.array!(@ingredients) do |ingredient|
    json.id ingredient.id
    json.name ingredient.name
    json.url ingredient_path(ingredient)
  end
end
# json.array! @customers do |customer|
#   json.id customer.id
#   json.name "#{customer.first_name} #{customer.last_name}"
#   # Only include basic attributes, no nested objects that cause recursion
# end

json.customers do
  json.array!(@customers) do |customer|
    json.id customer.id
    json.name customer.name
    json.url customer_path(customer)
  end
end
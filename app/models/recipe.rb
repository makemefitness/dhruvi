class Recipe < ApplicationRecord
  has_one_attached :photo do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end
  has_rich_text :description


  def self.ransackable_attributes(auth_object = nil)
    ["created_at", "id", "id_value", "ingredients", "link", "name", "preparation", "summary", "updated_at"]
  end
end

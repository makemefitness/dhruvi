class Recipe < ApplicationRecord
  has_one_attached :photo do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end
  has_rich_text :description
end

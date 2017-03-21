class Product < ActiveRecord::Base

  monetize :price_cents, numericality: true
  mount_uploader :image, ProductImageUploader

  belongs_to :category
  has_many :ratings

  validates :name, presence: {message: "Need a name!"}
  validates :price, presence: {message: "Need a price!"}
  validates :quantity, presence: {message: "Need a quantity!"}
  validates :category, presence: {message: "Need a category!"}

end

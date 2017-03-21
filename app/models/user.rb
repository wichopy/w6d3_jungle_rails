class User < ActiveRecord::Base
  has_many :ratings
  validates :email, uniqueness: true
  has_secure_password
end

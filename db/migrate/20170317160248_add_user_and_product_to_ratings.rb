class AddUserAndProductToRatings < ActiveRecord::Migration
  def change
    add_reference :ratings, :user, index: true, foreign_key: true
    add_reference :ratings, :product, index: true, foreign_key: true
  end
end

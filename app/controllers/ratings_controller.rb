class RatingsController < ApplicationController
  def new
    @rating = Rating.new
  end

  def create
    @rating = Rating.new(rating_params)
    @rating.user_id = current_user.id
    @rating.product_id = product_id_grab
    if @rating.save
      redirect_to [:products], notice: 'Product created!'
    else
      render :new
    end
  end

  private

  def rating_params
    params.require(:rating).permit(
      :rating,
      :description
    )
  end

  def product_id_grab
    params.require(:product_id)
  end

  def user_id_grab
    current_user.id
  end
end

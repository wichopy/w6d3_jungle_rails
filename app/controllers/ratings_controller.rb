class RatingsController < ApplicationController

  before_filter :authorize

  def new
    @rating = Rating.new
  end

  def destroy 
    @rating = Rating.find(params[:id])
    @rating.destroy
    redirect_to controller: 'products', id: product_id_grab, action: 'show', notice: 'Rating Deleted!'
  end

  def create
    @rating = Rating.new(rating_params)
    @rating.user_id = current_user.id
    @rating.product_id = product_id_grab
    if @rating.save
      redirect_to controller: 'products', id: product_id_grab, action: 'show', notice: 'Product created!'
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

end

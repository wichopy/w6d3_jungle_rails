require 'rails_helper'

RSpec.describe Product, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  describe 'Validations' do 
  #...
    before do
      @category = Category.create({name: "Books"})
    end

    it "Product's name should exist" do
      # product_name = @product.save
      product = @category.products.create({
        name:  '',
        description: 'abc',
        quantity: '123',
        price: '123'
      })
      expect(product.errors.full_messages).to include "Name Need a name!"
    end

    it "Product's price should exist" do
      # @category = Category.create({name: "Books"})
      product2 = @category.products.create({
        name:  'abc',
        description: 'abc',
        quantity: '123',
        price: nil
      })
      expect(product2.errors.full_messages).to include "Price Need a price!"
    end

     it "Product's quantity should exist" do
      # @category = Category.create({name: "Books"})
      product3 = @category.products.create({
        name:  'abc',
        description: 'abc',
        quantity: '',
        price: '123'
      })
      expect(product3.errors.full_messages).to include "Quantity Need a quantity!"
    end

     it "Product's category should exist" do
      product4 = Product.create({
        name:  'abc',
        description: 'abc',
        quantity: 123,
        price: 123
      })
      expect(product4.errors.full_messages).to include "Category Need a category!"
    end

  end
  
end

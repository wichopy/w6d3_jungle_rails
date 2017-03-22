require 'rails_helper'
Capybara.default_max_wait_time = 30
RSpec.feature "Visitor navigates to product details", type: :feature, js: true do
  # SETUP
  before :each do
    @category = Category.create! name: 'Apparel'

    10.times do |n|
      @category.products.create!(
        name:  Faker::Hipster.sentence(3),
        description: Faker::Hipster.paragraph(4),
        image: open_asset('apparel1.jpg'),
        quantity: 10,
        price: 64.99
      )
    end
  end



  scenario "They see one product's details" do
    # ACT
    visit root_path
    # puts page.html
    # page.first('.btn.btn-default.pull-right').
    # find_button('Details »').click
    click_link('Details »', :match => :first)
    expect(page).to have_css 'article.product-detail', count: 1
    save_screenshot
    # first('btn.btn-default.pull-right').click
    # DEBUG / VERIFY
  end

end

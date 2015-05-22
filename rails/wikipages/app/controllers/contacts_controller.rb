class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
    render('contats.index.html.erb')
  end
end

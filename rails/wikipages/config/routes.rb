Rails.application.routes.draw do
  match('contacts', {:via => :get, :to => 'contacts#index'})
end

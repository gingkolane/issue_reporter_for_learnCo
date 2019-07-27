Rails.application.routes.draw do
  resources :surveys
  resources :users
  resources :repos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :tests
  resources :surveys
  resources :users
  resources :repos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/data' => 'repos#data'

  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
  post '/repos_users/find_repos_user', to: 'repos_users#find_repos_user'

end

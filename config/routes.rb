Rails.application.routes.draw do
  resources :ingredient_categories
  resources :exercises

  resources :habits
  resources :exercise_per_weeks
  resources :goals
  resources :lifestyles
  devise_for :customers, controllers: {
    sessions: 'customers/sessions',
    registrations: 'customers/registrations',
    confirmations: 'customers/confirmations',
    passwords: 'customers/passwords',
    controllers: 'customers',
    views: 'customers'
  }
  devise_for :users, path: 'users', controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    confirmations: 'users/confirmations',
    passwords: 'users/passwords',
    controllers: 'users',
    views: 'users'
  }
  get 'main/dashboard'
  get 'main/settings'
  get 'main/main'
  get 'main/home'
  get 'main/customer'
  get 'main/help'
  get 'main/about'

  #-----------------------------------------------------------------------------------------#
  # search - json --------------------------------------------------------------------------#
  get '/search', to: 'main#search'
  get '/autocomplete', to: 'main#autocomplete'
  get 'api/ingredients'
  #-----------------------------------------------------------------------------------------#


  #-----------------------------------------------------------------------------------------#
  # resources ------------------------------------------------------------------------------#
  resources :customers do
    resource :profil
  end
  resources :ingredients
  resources :recipes
  resources :body_types
  
  #-----------------------------------------------------------------------------------------#


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "main#home"
end

Rails.application.routes.draw do
  resources :customer_recipes
  resources :diet_sets

  get '/add_meal/:id', to: 'diet_sets#add_meal'
  root "main#home"
  get 'main/dashboard'
  get 'main/settings'
  get 'main/main'
  get 'main/home'
  get 'main/customer'
  get 'main/help'
  get 'main/about'
  get 'customer_recipes/moja'
  get '/customer_recipes/new/:id', to: 'customer_recipes#new'

  #-----------------------------------------------------------------------------------------#
  # search - json --------------------------------------------------------------------------#
  get '/search', to: 'main#search'
  get '/autocomplete', to: 'main#autocomplete'
  get 'api/ingredients'
  get '/api/recipes', to: 'api#recipes'
  get '/diet_search', to: 'customer_recipes#diet_search'


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

  #-----------------------------------------------------------------------------------------#
  # resources ------------------------------------------------------------------------------#
  resources :customers do
    resource :profil
    resources :tasks
    resources :diet_sets do
        resources :customer_recipes
      end
  end
  resources :ingredients
  resources :recipes
  resources :body_types
  
  #-----------------------------------------------------------------------------------------#


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end

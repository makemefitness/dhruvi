Rails.application.routes.draw do
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

  # Define authenticated roots
  authenticated :user do
    root to: "main#dashboard", as: :authenticated_user_root
  end

  authenticated :customer do
    root to: "main#customer", as: :authenticated_customer_root
  end

  # Define unauthenticated root (for visitors)
  unauthenticated do
    root to: "main#home"
  end
  
  resources :customer_recipes
  resources :diet_sets

  get '/add_meal/:id', to: 'diet_sets#add_meal'

  get 'main/dashboard'
  get 'main/adminlte'
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

  get 'customers_search', to: 'customers#autocomplete'


  resources :ingredient_categories
  resources :exercises

  resources :habits
  resources :exercise_per_weeks
  resources :goals
  resources :lifestyles

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

  resources :appointments

  resources :users do
    resources :customers do
      resources :messages, only: [:index, :create]
    end
  end

  resources :messages, only: [:new, :create]
  resources :conversations, only: [:index, :show, :destroy] do
    member do
      post :reply
      post :restore
      post :mark_as_read
    end
    collection do
      delete :empty_trash
    end
  end
  #-----------------------------------------------------------------------------------------#


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  # root "main#home"
end

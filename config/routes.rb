Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    get 'home_timeline', to: 'tweets#home_timeline'
    post 'tweet', to: 'tweets#tweet'
  end

  # NO OTHER ROUTES BELOW THIS
  get '#unmatched_route', to: 'home#index'
end

Rails.application.routes.draw do
  root to: 'home#index'

  get '/api' => 'home#index', defaults: { format: :json }
end

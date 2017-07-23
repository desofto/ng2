class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.html do
        if Rails.env.development?
          system("#{Rails.root}/node_modules/.bin/tsc")
        end
        render file: '/public/app.html'
      end

      format.json { render json: { some: 'data' } }
    end
  end
end

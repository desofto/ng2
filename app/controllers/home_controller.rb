class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.html do
        if Rails.env.development?
          result = `#{Rails.root}/node_modules/.bin/tsc`
          if result.present?
            render plain: result.split("\n").join("<br />")
            return
          end
        end
        render file: '/public/app.html'
      end

      format.json { render json: { some: 'data' } }
    end
  end
end

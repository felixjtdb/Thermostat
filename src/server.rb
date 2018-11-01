require 'sinatra/base'
require 'sinatra'

class Server < Sinatra::Base

  DATA = [{"name": "felix", "id": "1"}, {"name": "shannon", "id": "2"}]
  get '/info' do
    return DATA
  end

  run! if app_file == $0
end

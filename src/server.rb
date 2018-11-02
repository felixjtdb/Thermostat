require 'sinatra/base'
require 'sinatra'
require "pg"
require 'json'
require 'pry'

class DatabaseInteraction
  def self.getState
    data = PG.connect(dbname: "thermostat_savedstate").exec("SELECT * FROM saved_state WHERE id = 1;").first
    return data.to_json
  end

  def self.saveState(temp, city, powersaver)
    connection = PG.connect(dbname: "thermostat_savedstate")
    connection.exec("UPDATE saved_state SET temp = #{temp}, city = #{city}, ps = #{powersaver} WHERE id = 1")
  end
end

class Server < Sinatra::Base
  get '/info' do
    DatabaseInteraction.getState
  end

  post '/info' do
    DatabaseInteraction.saveState(params[:temp], params[:city], params[:ps])
  end

  run! if app_file == $0
end

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  # format :json
  cell = rand(1..9)
  color = "#" + "%06x" % (rand * 0xffffff)
  data = {cell: cell, color: color}.to_json
end
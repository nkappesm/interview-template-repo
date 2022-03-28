class UsersWorker
  include Sidekiq::Worker

  def perform(*)
  end

  private

  def api_connection
    uri = URI("#{ENV['USERS_API_URL']}")
    http = Net::HTTP.new(uri.host, uri.port)
    req = Net::HTTP::Put.new(uri.path, 'Content-Type' => 'application/json')
    req['APIKEY'] = ENV['USERS_API_KEY']
    http.request(req)
  end
end

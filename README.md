# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Ruby/Rails version

Ruby: `2.7.3`

Rails: `5.2.1`

## Configuration

1. Clone this repository and `cd` into it.

~~~
git clone git@github.com:nkappesm/interview-template-repo.git

cd /interview-template-repo
~~~

2. Set ruby version to 2.7.3

3. Install all dependencies

~~~
bundle install
~~~
~~~
yarn install
~~~

4. Add the database (postgresql) configuration file **config/database.yml**

~~~yml
default: &default
  adapter: postgresql
  username: <%= ENV['DATABASE_USERNAME'] %>
  password: <%= ENV['DATABASE_PASSWORD'] %>
  encoding: unicode
  pool: 5
  timeout: 5000

development:
  <<: *default
  database: microverse_interview_database_dev

test:
  <<: *default
  database: microverse_interview_database_test

production:
  <<: *default
  pool: 10
  database: <%= ENV['DATABASE_NAME'] %>
~~~

5. Create and migrate database

~~~
rails db:create db:migrate
~~~

6. Run server

~~~
rails s
~~~

# Running the Application

* cd to frontend directory
* npm install 
* npm start



# TODO:
* get color from color picker and pass to canvas
* Check why canvas hand isn't exactly aligned with drawing
* Add More Routes to back-end
* Check if login page route now works


The local environment allows users to develop the application within
a set of docker containers that closely match the production environment
while still allowing for easy development and debugging.


## Pre-reqs
Install Flyway for database migrations.
	MACOS: brew install flyway

Install Docker to run postgres image

## Local

### Setup
Run the local docker environment:
$ cd docker-envs/local && docker-compose up

Run the database migration scripts:
$ scripts/migrate_all_local.sh

## Database Configurations


| Host  |  Port | Database  | Username  | Password  |
|---|---|---|---|---|
| localhost  | 5434  | pictochatdb  | me  | password  |

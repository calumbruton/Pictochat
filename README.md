# Running the Application

* cd to frontend directory
* npm install 
* npm start



TODO:
* get color from color picker and pass to canvas
* Check why canvas hand isn't exactly aligned with drawing
* make a quick login page
* Implement Routes


The local environment allows users to develop the application within
a set of docker containers that closely match the production environment
while still allowing for easy development and debugging.


##Pre-reqs
Flyway for database migrations.
	MACOS: brew install flyway

##Local

###Setup
Run the local docker environment:
$ cd envs/local && docker-compose up

Run the database migration scripts:
$ scripts/migrate_all_local.sh

##Databases

Host, Port, Datavase, Username, password
localhost	5432	pictochatdb		me 		password
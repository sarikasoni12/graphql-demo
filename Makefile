init: start migrate seed

install:
	npm install
seed: 
	docker exec -it graphql-demo-nodejs-1 npx sequelize-cli db:seed:all --seeders-path database/seeders
migrate: 	
	docker exec -it graphql-demo-nodejs-1 npx sequelize-cli db:migrate --migrations-path database/migrations
start:
	docker-compose up --build -d	
build: 
	docker build --no-cache --progress=plain -t graphql-demo-nodejs .	



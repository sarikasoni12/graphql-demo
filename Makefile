start: docker migrate seed install dev

dev: install	
	npm run start
install: seed
	npm install	
seed: migrate
	npx sequelize-cli db:seed:all --seeders-path database/seeders
migrate: docker	
	npx sequelize-cli db:migrate --migrations-path database/migrations
docker:
	docker-compose up -d	


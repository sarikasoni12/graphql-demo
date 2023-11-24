start: docker migrate seed install dev

dev: install	
	npm run start
install: seed
	npm install	
seed: migrate
	npx sequelize-cli db:seed:all
migrate: docker	
	npx sequelize-cli db:migrate
docker:
	docker-compose up -d	


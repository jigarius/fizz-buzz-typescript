.PHONY: provision
provision:
	docker compose exec -ti node npm install
	docker compose exec -ti node npm run-script build


.PHONY: ssh
ssh:
	docker compose exec -ti node bash


.PHONY: lint
lint:
	npx tslint --project /opt/fizzbuzz


.PHONY: test
test:
	npm run-script test

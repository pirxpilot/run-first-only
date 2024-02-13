check: lint test

lint:
	./node_modules/.bin/jshint index.js test

test:
	node --require should --test

.PHONY: check lint test

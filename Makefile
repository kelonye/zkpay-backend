www:
	@NODE_PATH=./src:$NODE_PATH ./node_modules/.bin/nodemon bin/www.js

test:
	@NODE_PATH=./src:$NODE_PATH NODE_ENV=test ./node_modules/.bin/mocha test --exit

.PHONY:  www test


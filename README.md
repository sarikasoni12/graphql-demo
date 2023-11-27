# GraphQL Demo

This repository is to show the basic demo of GraphQL integration with Mysql

### Prerequisites

1. Install make command `brew install make`
2. Install docker desktop

### Steps for local setup

Run following command in the terminal

1. `make init`

```
The make command does folloing
1. Creates instances of app and mysql container
2. Run the db migrations
3. Seed the db
5. Serves the app at port :8080
6. Test this route: http://localhost:8080/graphql

```

### For pushing a PR

Run following commands and fix the issues before pushing a pull request. A workflow is added through github actions which will trigger following checks on a PR

1. `npm run lint:check`
2. `npm run format:check`

### For reference

1. https://dev.to/devland/set-up-a-nodejs-app-with-eslint-and-prettier-4i7p

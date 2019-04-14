# stix-example

Structured Threat Information Expression (STIX™) real-world usage example.

## installation / usage

### producer

#### web

```
# producer-web catalog:
$ cd ./producer/web

# available commands:
$ yarn install
$ yarn start
$ yarn prettier
$ yarn build

# heroku deploy
$ pwd
*/stix-example
$ heroku create cti-producer-web --buildpack mars/create-react-app
$ heroku git:remote -a cti-consumer-web
$ git subtree push --prefix producer/web heroku master
# or
$ git push --force heroku `git subtree split --prefix producer/web HEAD`:master
```

### consumer

#### server

```
/* todo */
```

#### web

```
# consumer-web catalog:
$ cd ./consumer/web

# available commands:
$ yarn install
$ yarn start
$ yarn prettier
$ yarn build

# heroku deploy
$ pwd
*/stix-example
$ heroku create cti-consumer-web --buildpack mars/create-react-app
$ heroku git:remote -a cti-consumer-web
$ git subtree push --prefix consumer/web heroku master
# or
$ git push --force heroku `git subtree split --prefix consumer/web HEAD`:master
```

## references

- https://oasis-open.github.io/cti-documentation/
- https://oasis-open.github.io/cti-documentation/examples/sighting-of-an-indicator?fbclid=IwAR2AP37MAE8XkF-YEYM97V7cWS2SEKFsIdpom2QMRYTCy5rweWMwSVXmH6w

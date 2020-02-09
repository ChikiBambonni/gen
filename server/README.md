# Gen Server

This server uses features of `Firebase hosting` and `Node.js` runtime.

## Development server

To run development server you will need to create `config.json` in `function/src/config` folder, with your firebae serviceAccount credentials 
, provide `databaseURL` in `config.js` and feed your database with json data on `/` node.

Run `npm run serve` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Deployment

First you need to build Angular app by runnong `ng build --prod` then run `firebase deploy`.

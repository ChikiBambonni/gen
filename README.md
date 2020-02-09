# Gen

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

While running app supports two modes:

1. `Mock mode` - all http calls to endpoints will be intercepted by mock interceptor. See `src/app/core/mock-backend`.

2. `Real mode` - all http calls will be forwarded to Node.js server. See `server` folder and `proxy.conf.json` file.

Default mode is - `Mock mode`. Info about what mode to use is stored in `LocalStorage` with `mock_data_service_v1` key.

While app is running you can switch to mode you wish, simply running next code in browser console:

1. In you want switch to `Real mode` run - `window.setRealMode();` (page will be reloaded).

2. In you want switch to `Mock mode` run - `window.setMockMode();` (page will be reloaded).

Remember that running your app in `Real mode` enforces you to run your `Node.js` server with Firebase Realtime Database as well (see `server` folder),
but if you dont want you can always run app in `Mock mode`.

## Build with server

First you will need to install all npm packages then run following commands

```
ng build --prod
cd ./server/functions
npm run serve
```

Then browse http://localhost:5000

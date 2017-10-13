Create React App Express
===========================================

[![Build Status](https://travis-ci.org/antonybudianto/create-react-app-express.svg?branch=master)](https://travis-ci.org/antonybudianto/create-react-app-express)
[![npm version](https://badge.fury.io/js/create-react-app-express.svg)](https://badge.fury.io/js/create-react-app-express)
[![codecov](https://codecov.io/gh/antonybudianto/create-react-app-express/branch/master/graph/badge.svg)](https://codecov.io/gh/antonybudianto/create-react-app-express)

Express server for your Create React App projects featuring server-side rendering.

Please visit [Create React App Universal CLI](https://github.com/antonybudianto/cra-universal) for the usage.

### How it works
- In development mode, the middleware will try to proxy into the CRA client to get the required `index.html`, and then proceed to render on the server
- By default, the middleware will try to use default CRA client port (3000), and you can change it using `CRA_CLIENT_PORT` env variable
- In production mode, the middleware will get the `index.html` from your CRA client build

### Credits
- Based on https://github.com/ayroblu/ssr-create-react-app-v2

### License
MIT

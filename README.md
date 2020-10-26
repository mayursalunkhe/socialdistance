### To run server we backend we installed nodemon.
With nodemon we dont have to restart server for every change we make.
I updated package.json file to run nodemon with npm command.


### NPM install
We have to run npm install for both frontend and backend.
Instead we will install concurrently npm package.
Make changes in package.json of our API so we have to run
npm install and other commands like run only one time.


### For both forntend and backend to run at same time.
We use concurrently npm package.
We need to make changes in package.json of our API.

"scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client-install": "npm install --prefix client",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
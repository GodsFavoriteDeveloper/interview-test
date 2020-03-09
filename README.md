# Movies App Interview Test
An Ionic Movies Application that's connected to a NodeJS, Express and Postresql server

Web Link To App: https://interview-movies.herokuapp.com </br>
API Endpoints: https://interview-movies.herokuapp.com/api/movies

### Server Setup
From the root of the project run *npm install*. This will install all required dependencies. If running on a local server, update the config object in *server.js* to your local credentials. Current credentials are connected to a Heroku-Postgres instance
Once all that is setup run *npm start* . If running on a local server, update **node** to **nodemon** in package.json. Make sure you have Nodemon installed on your local machine

### Client Setup
cd into the client folder. First run *npm install* to install dependencies. Run *ionic serve* to run the app on the browser.
To view the app from the server url, run *ng build --prod* from the client folder. This will rebuild and update the www folder.


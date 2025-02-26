const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connectToDb();

app.use(cors()); // we are allowing requests from all websites for now in the developement phase but in production we will change it to only allow requests from our frontend

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // we are using cookie parser to parse the cookies that are sent to the server because we will be using cookies to store the jwt token



app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);


module.exports = app;
// requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');

// express is called to create app
const app = express();


// Middlewares
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === 'production'
    }
  }));

// ROUTES & API
const usersRouter = require('./routes/users');
const placesRouter = require('./routes/places');
const picturesRouter = require('./routes/pictures');

app.use('/users', usersRouter);
app.use('/places', placesRouter);
app.use('/pictures', picturesRouter);

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})



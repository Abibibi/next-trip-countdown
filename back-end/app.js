// requires
const express = require('express');
const cors = require('cors');

// express is called to create app
const app = express();

require('dotenv').config();

// Middlewares
app.use(cors());
app.use(express.json());

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



// requires
const express = require('express');
const cors = require('cors');

// express is called to create app
const app = express();

require('dotenv').config();

// Middlewares
app.use(cors());
app.use(express.json());

// port
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})



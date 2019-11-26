// requires
const express = require('express');
const cors = require('cors');

// express is called to create app
const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})



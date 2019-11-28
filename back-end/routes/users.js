const router = require('express').Router();
const { pool, client } = require('../config/database');

router.route('/add').post((req, res) => {
    const { userName, travellingDate, place } = req.body;
    const text = 'INSERT INTO users (firstname, travelling_date, places_id) VALUES ($1, $2, (SELECT id FROM places WHERE name = $3))';
    const values = [userName, travellingDate, place];

    client.connect();

    client.query(text, values)
        .then(() => res.status(200).json('Username, travelling_date and places_id added in users table'))
        .catch((error) => console.error(error.stack))
        .then(() => client.end())
   
});

module.exports = router;
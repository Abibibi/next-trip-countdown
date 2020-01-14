const Router = require('express-promise-router');
const router = new Router();
const { pool } = require('../config/database');

router.route('/add').post(async (req, res) => {
    const { userName, travellingDate, place } = req.body;
    const text = `INSERT INTO users (firstname, travelling_date, places_id)
    VALUES ($1, $2, (SELECT id FROM places WHERE name = $3))`;
    const values = [userName, travellingDate, place];

    await pool.query(text, values);
    res.status(200).json('Username, travelling_date and places_id added in users table');
});

module.exports = router;
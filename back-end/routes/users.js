const Router = require('express-promise-router');
const router = new Router();
const { pool } = require('../config/database');
const authMiddleware = require('../utils/authMiddleware');

router.route('/add').post(async (req, res) => {
    const { userName, travellingDate, place } = req.body;
    const text = `INSERT INTO users (firstname, travelling_date, places_id)
    VALUES ($1, $2, (SELECT id FROM places WHERE name = $3))`;
    const values = [userName, travellingDate, place];

    await pool.query(text, values);
    
    const userInserted = await pool.query(`SELECT id, firstname, places_id FROM users
    WHERE firstname = $1
    LIMIT 1`, [userName]);

    req.session.user = {
        id: userInserted.rows[0].id,
        name: userInserted.rows[0].firstname,
        placeId: userInserted.rows[0].places_id,
        placeName: place,
        travellingDate
    }
    
    res.status(200).json('Username, travelling_date and places_id added in users table');
});

router.route('/checkExistingUser').get(authMiddleware, async (req, res) => {
    res.json(req.session.user);
})

module.exports = router;
const Router = require('express-promise-router');
const router = new Router();
const { pool } = require('../config/database');

router.route('/onePicture').get(async (req, res) => {
    const cityId = '1';
    const text = `SELECT url, alt FROM pictures
    WHERE places_id = $1
    ORDER BY RANDOM()
    LIMIT 1`;
    const value = [cityId];

    const randomPicture = await pool.query(text, value);
    res.status(200).json(randomPicture.rows);

});

module.exports = router;
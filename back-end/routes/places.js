const Router = require('express-promise-router');
const router = new Router();
const { pool, client } = require('../config/database');

router.route('/').get(async (req, res) => {
    const results = await pool.query('SELECT * FROM places');

    res.status(200).json(results.rows);

});

module.exports = router;
const Router = require('express-promise-router');
const router = new Router();
const { pool } = require('../config/database');

router.route('/').get(async (req, res) => {
    const results = await pool.query('SELECT id, name FROM places');

    res.status(200).json(results.rows);

});

module.exports = router;
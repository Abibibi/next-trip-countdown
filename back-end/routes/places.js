const router = require('express').Router();
const { pool, client } = require('../config/database');

router.route('/').get((req, res) => {
    pool.query('SELECT * FROM places', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

module.exports = router;
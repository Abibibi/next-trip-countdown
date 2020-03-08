const Router = require('express-promise-router');
const router = new Router();
const { pool } = require('../config/database');
const authMiddleware = require('../utils/authMiddleware');


router.route('/add').post(async (req, res) => {
    const { userName, travellingDate, place} = req.body;
    const text = `INSERT INTO users (firstname, travelling_date, place_name)
    VALUES ($1, $2, $3)`;
    const values = [userName, travellingDate, place];

    await pool.query(text, values);
    
    const userInserted = await pool.query(`SELECT id, firstname, place_name FROM users
    WHERE firstname = $1
    LIMIT 1`, [userName]);

    console.log(userInserted.rows[0].place_name);

    req.session.user = {
        id: userInserted.rows[0].id,
        name: userInserted.rows[0].firstname,
        placeName: userInserted.rows[0].place_name,
        travellingDate
    }
    
    res.status(200).json(userInserted.rows[0]);
});


router.route('/checkExistingUser').get(authMiddleware, async (req, res) => {
    res.json(req.session.user);
});


router.route('/remove').get(authMiddleware, async (req, res) => {
    const userId = req.session.user.id;

    await pool.query(`DELETE FROM users WHERE id = $1`, [userId]);

    await req.session.destroy();

    res.json('Utilisateur supprimé de la base de données et session supprimée')
});

module.exports = router;
const Router = require('express-promise-router');
const router = new Router();
const { pool, client } = require('../config/database');

router.route('/onePicture').get(async (req, res) => {
    
});

module.exports = router;
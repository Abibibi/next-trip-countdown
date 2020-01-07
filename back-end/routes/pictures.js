const Router = require('express-promise-router');
const router = new Router();
const { pool, client } = require('../config/database');


module.exports = router;
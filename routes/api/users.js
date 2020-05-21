const express = require('express');
const router = express.Router();

//@ROUTE    GET API/USERS
//@DESC     'TEST ROUTE'
//@ACCESS   PUBLIC --> (does not need a token for access)
router.get('/', (req, res) => res.send('user route'));

module.exports = router;

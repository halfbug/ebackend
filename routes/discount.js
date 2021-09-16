const express = require('express');
const {
    getDiscount,
    createDiscount

  } = require('../controllers/discount');


const router = express.Router({ mergeParams: true });

router.route('/').get(getDiscount);
router.route('/').post(createDiscount);

module.exports = router;
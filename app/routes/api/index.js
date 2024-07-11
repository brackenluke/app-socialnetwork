const router = require('express').Router();
const thoughts = require('./thoughts');
const userRoutes = require('./userRoutes');

router.use('/courses', thoughts);
router.use('/students', userRoutes);

module.exports = router;

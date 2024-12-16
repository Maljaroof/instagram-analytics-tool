const express = require('express');
const router = express.Router();

// Example analytics endpoint
router.get('/', (req, res) => {
    res.json({ message: 'Analytics route working!' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Example scheduler endpoint
router.post('/', (req, res) => {
    const { content, scheduleTime } = req.body;
    res.json({ message: 'Post scheduled successfully!', content, scheduleTime });
});

module.exports = router;

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Instagram Analytics Tool Backend Running!');
});

// Placeholder routes for analytics and scheduling
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/scheduler', require('./routes/scheduler'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

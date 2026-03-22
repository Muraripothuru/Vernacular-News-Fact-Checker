const express = require('express');
const cors = require('cors');
require('dotenv').config();

const factRoutes = require('./routes/factCheck');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/fact-check', factRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

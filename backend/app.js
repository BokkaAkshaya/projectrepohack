const express = require('express');
const connectDB = require('./db/connect');

const app = express();

// Import and execute the connect code from db directory
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
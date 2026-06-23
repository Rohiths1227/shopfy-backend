const express = require('express');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Shopfy Backend Running');
});

app.listen(5000, () => {
    console.log('Server Running on Port 5000');
});
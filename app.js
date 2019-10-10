const express = require('express');

const app = express();



// ROUTES
app.get('/', (reg, res) => {
    res.send('We are on home');
});



app.listen(3332);
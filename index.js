const express = require('express');
const path = require('path');

const app = express();

const members = [
    {
        id: 1,
        name: 'Bibek Mishra',
        email: 'bibek@gmail.com'
    },
    {
        id: 2,
        name: 'Gautam Shakya',
        email: 'gautam@gmail.com'
    },
    {
        id: 3,
        name: 'Prashanna',
        email: 'pmp@gmail.com'
    }
];

app.get('/api/members', (req, res) => {
    res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
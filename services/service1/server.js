
const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());

app.get('/example', (req, res) => {
    res.send('This is an example route');
});

const PORT = process.env.SERVICE1_PORT || 4001;
app.listen(PORT, () => console.log(`Service 1 running on port ${PORT}`));

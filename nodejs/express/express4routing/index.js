const express = require("express");
const app = express();

const port = 3001;
const host = '127.0.0.1';

const routing = require('./router.js');

app.use('/router', routing);

app.listen(port, host, () => {
    console.log(`index server is running at http://${host}:${port}`)
});
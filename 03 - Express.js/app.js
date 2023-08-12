const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => { // handles unexpected URLS
    res.status(404).send("<h1>Page not found</h1>");
});


const server = app.listen(3000)// replaces const server = http.createServer(app); server.listen(3000);
                                    // also it doesn't need the import of http -- const http = require('http');
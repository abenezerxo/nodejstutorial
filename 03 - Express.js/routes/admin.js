const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    res.send('<h1>The Add product page!</h1>' +
        '<form action="/product" method="POST"><input type="text" name="title">' +
        '<button type="submit" name="addProcut">Add Product</button></form>'); // Send method simple sets the header automatically to be Content-Type: text/html
});

router.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
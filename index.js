const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.render('index');
});

router.get('/about',(req, res) =>{
    res.render('about');
});

router.get('/contacts', (req,res) => {
    res.render('contacts');
});

router.get('/images', (req,res) => {
    res.render('images');
});

router.get('/shane', (req,res) => {
    res.render('shane');
});

module.exports = router;

const { Router } = require('express');
const router = Router();

router.get('/hello', (req, res) => {
    res.send('Hello World ');
})

router.get('/test', (req, res) => {
    const data = { 
        "name": "Fede",
        "website" : "www.fedeweb.com"
    }
    res.json(data);
})
router.get('/', (req, res) => {
    res.json({"Title" : "Hello World" });
});


module.exports = router;
const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch'); //npm i node-fetch 

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') //obtenemos datos de otro servicio
    const users = await response.json();
    console.log(users);
    res.json(users)
    res.send('users');
});

module.exports = router;

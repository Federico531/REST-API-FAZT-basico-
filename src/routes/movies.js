const { Router } = require('express');
const router = Router();
const _ = require('underscore') //BIBLIOTECA
const movies = require('../sampleDB.json')
console.log(movies);


router.get("/", (req, res) => {
    res.json(movies);
})

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body
    console.log(title, director)
    console.log(year, rating)

    //esto se puede validar con express validator (string validator)
    if (title, director, year, rating) {
        const id = movies.length + 1
        const newMovie = { ...req.body, id }; //pasa el objeto desplegado
        movies.push(newMovie);
        res.json(movies)

    } else {
         //codigo de estado
        res.status(500).json({ error: 'there was an error' })
    }
})
//UNDERSCORE.JS --> Para recorrer ARRAYS
router.delete('/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    _.each(movies, (movie, i) => { //recorre cada indice del array movies, esto recibe una pelicula y un indice en el callback
        if (movie.id == id){ //si la pelicula que estoy recorriendo es igual al id que estoy recibiendo desde el metodo delete
            movies.splice(i, 1) //este metodo elimina, (el numero de pelicula del indice, elimina una)
        }
    })
    res.send(movies)
})

router.put('/:id', (req, res) => { 
    const {id} = req.params; //el id que quiero actualizar 
    const { title, director, year, rating } = req.body //los datos que quiero actualizar
    if(title && director && year && rating){
        _.each(movies,(movie, m ) => {
            if(movie.id == id) {
                movie.title =  title;
                movie.director = director; 
                movie.year = year; 
                movie.rating = rating; 
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: "hubo un error"})
    }
});

   

module.exports = router;
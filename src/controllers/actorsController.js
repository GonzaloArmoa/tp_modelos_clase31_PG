const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Actor.findAll({
            order : [
                ['last_name', 'ASC']
            ]
        })
        .catch(error => console.log(error))
    },

 /*    detail : (req,res) => {
        db.Actor.findByPk(req.params.id)
        .then(actor => res.render('actorsDetail',{
        actor}))
        .catch(error => console.log(error))     */

        detail : (req,res) => {
            db.Actor.findByPk(req.params.id)
            .then(actor => 
                db.Movie.findByPk(actor.favorite_movie_id)
            .then(pelicula =>
                res.render('actorsDetail',{
                    actor,
                    pelicula
                })))
            .catch(error => console.log(error))    
}
}
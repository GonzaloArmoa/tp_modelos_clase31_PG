module.exports = {
    list : (req,res) => {
        return res.send('lista de películas')
    },
    new : (req,res) => {
        return res.send('películas de estreno')
    }, 
    recommended : (req,res) => {
        return res.send('películas recomendadas')
    },
    detail : (req,res) => {
        return res.send('detalle de la película')
    }
}
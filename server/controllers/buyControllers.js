const User = require('../routes/buyRoutes')

const items_get = (req, res, next) => {
    res.send('kem cho? majama')
}

module.exports = {
    items_get
}
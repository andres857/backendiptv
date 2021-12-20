const {routerPlayers} = require('./players')

function routerApi(app){
    app.use('/v1/players',routerPlayers)
}

module.exports = {
    routerApi
}
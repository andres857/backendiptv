const {routerPlayers} = require('./players')

function routerApi(app){
    app.use('/tv/v1/players',routerPlayers)
}

module.exports = {
    routerApi
}
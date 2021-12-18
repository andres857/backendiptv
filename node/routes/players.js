const routerPlayers = require('express').Router()
const {getPlayersConnected} = require('../getClients')

// routes of players
routerPlayers.get('/', async (req,res)=>{
    console.log(`Obteniendo reproductores conectados por medio de la API`);
    const listPlayers = await getPlayersConnected()
    res.json(listPlayers)
})

module.exports = {
    routerPlayers
}

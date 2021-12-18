const fetch = require('node-fetch')
require('dotenv').config({ path: '~/Documents/work/node-backend/.env'})

const url = process.env.URLAPI
const username = process.env.USERNAME
const password = process.env.PASSWORD

async function getPlayersConnected(){
    const response = await fetch(url,{
        headers: {
            'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64')
        }
    });
    const data = await response.json();
    console.log(data.data[0].clientid);
}
getPlayersConnected()
module.exports = {
    getPlayersConnected
}

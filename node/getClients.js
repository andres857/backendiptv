const fetch = require('node-fetch')
require('dotenv').config()

const url = 'http://broker.windowschannel.com:8081/api/v4/clients'
const username = '8122b87d84e7d'
const password = 'MzAyNDcyNDk4MDA3MTIwMDIwOTM3MDcyNTgzODMzMDI2NTG'


async function getPlayersConnected(){
    try {
        const response = await fetch(url,{
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64')
            }
        });
        return await response.json(); 
        //  console.log(data.data[0].clientid);
    } catch (error) {
        console.log(`hay un hp error, jueputa ${url}`);
    }    
}

module.exports = {
    getPlayersConnected
}

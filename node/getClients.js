const fetch = require('node-fetch')
const {URLAPI,USERNAME,PASSWORD} = require('./config')

const url = URLAPI
const username = USERNAME
const password = PASSWORD

console.log(`${url}----`);

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

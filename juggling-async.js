"use strict"

const axios = require('axios')

const urls = process.argv.splice(2)
let response = new Array()

//problema sincronizzare in ordine le risposte
for(let index in urls) {
    response.push(axios.get(urls[index]))
}

Promise.all(response).then((values) => {
    for(let value of values) console.log(value.data);
});
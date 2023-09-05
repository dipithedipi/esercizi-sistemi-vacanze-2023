"use strict"

const axios = require('axios')

const URL = process.argv[2]

axios.get(URL)
    .then(res => {
        for (let name of res.data.split(/(?=[A-Z])/)){
            console.log(name)
        }
    })
    .catch(err => console.log(err))

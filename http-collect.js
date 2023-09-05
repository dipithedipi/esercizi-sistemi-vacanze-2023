"use strict"

const axios = require('axios')

const URL = process.argv[2]

axios.get(URL)
    .then(res => {
        console.log(res.data.length)
        console.log(res.data)
    })
    .catch(err => console.log(err))

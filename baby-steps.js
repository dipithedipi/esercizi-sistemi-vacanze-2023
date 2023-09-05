"use strict"

function sum(array) {
    sum = 0
    for(elm in array) {
        sum += Number(array[elm])
    }
    return sum
}

console.log(sum(process.argv.slice(2)))
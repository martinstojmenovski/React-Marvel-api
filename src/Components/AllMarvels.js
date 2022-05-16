import {useEffect, useState} from 'react'

const publicKey = "44d2d43ba9be5678fb9c06aa57e4bdcb"
const privateKey = "8dcc032a3950d68667993fd90ea8210b8d29dc64"
const hash = "90a26c67e0b21e7532c4e3439210f3ea"


function AllMarvels() {

    fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=name&ts=1&apikey=${publicKey}&hash=${hash}`)
    .then(response => response.json())
    .then(data => console.log(data))
    return 

    
}
export default AllMarvels
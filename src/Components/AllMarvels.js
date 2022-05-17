import { useEffect, useState } from 'react'
import SinglePoster from './SinglePoster'
const publicKey = "44d2d43ba9be5678fb9c06aa57e4bdcb"
const privateKey = "8dcc032a3950d68667993fd90ea8210b8d29dc64"
const hash = "90a26c67e0b21e7532c4e3439210f3ea"


function AllMarvels() {
    const [marvelList, setMarvelList] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState("")



    useEffect(() => {
        fetch(`https://gateway.marvel.com/v1/public/characters?name=hulk&limit=99&ts=1&apikey=${publicKey}&hash=${hash}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data.results)
                setMarvelList(data.data.results)
                setSelectedCharacter(data.data.results[0])
            }
            )
    }, [])

    const handlePosterClick = (id) => {
        // console.log(id)
        setSelectedCharacter(id)
    }


    const marvelPics = marvelList.map((book) => {
        return <img onClick={() => {handlePosterClick(book)}}
            src={book.thumbnail.path + '.' + book.thumbnail.extension}
            alt="Marvel commic posters"
            style={{ height: "100px" }} />
    })
// when I console.log this It returns undefined
        // console.log(selectedCharacter.thumbnail)

    return (
        <div>
            <h1> This is home page</h1>
            {marvelPics}
            <SinglePoster name={selectedCharacter.name} pic={selectedCharacter.thumbnail} description={selectedCharacter.description} />
        </div>
    )


}
export default AllMarvels

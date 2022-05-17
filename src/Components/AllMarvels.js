import { useEffect, useState } from 'react'
import SinglePoster from './SinglePoster'

const publicKey = "44d2d43ba9be5678fb9c06aa57e4bdcb"
const hash = "90a26c67e0b21e7532c4e3439210f3ea"


function AllMarvels(props) {
    const [marvelList, setMarvelList] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState("")



    useEffect(() => {
        fetch(`https://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=${publicKey}&hash=${hash}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data.results)
                setMarvelList(data.data.results)
                setSelectedCharacter(data.data.results[0])
            }
            )
    }, [])

    const handlePosterClick = (character) => {
        // console.log(id)
        setSelectedCharacter(character)
    }


    const marvelPics = marvelList.map((book) => {
        return <img key={book.id} onClick={() => {handlePosterClick(book)}}
            src={book.thumbnail.path + '.' + book.thumbnail.extension}
            alt="Marvel commic posters"
            style={{ height: "100px" }} />
    })

    return (
        <div>
            <h1> This is home page</h1>
            {marvelPics}
            <SinglePoster myFavorite={props.addToFavorite} name={selectedCharacter.name} pic={selectedCharacter.thumbnail} description={selectedCharacter.description} />
        </div>
    )


}
export default AllMarvels

import { useState } from 'react'
import SinglePoster from './SinglePoster'
function Favorite(props) {
    // console.log(props)
    const [favoritePoster, setFavoritePoster] = useState("")

    let myFavorites = props.favorites.map((character, index) => {
        // console.log(character)
        return (
            <div key={index}>
                <img onClick={() => handlePosterClick(character)}
                    src={character.thumbnail.path + '.' + character.thumbnail.extension}
                    alt="Marvel commic posters"
                    style={{ height: "100px" }} />
            </div>
        )
    })

    const handlePosterClick = (character) => {
        setFavoritePoster(character)
        console.log(character)
    }


    return (
        <div>
            <h1> This is Favorite Marvels</h1>
            <div>{myFavorites}</div>
            {/* <SinglePoster
                addToFavorites={() => props.addToFavorites(props.selectedCharacter)}
                name={favoritePoster.name}
                pic={props.selectedCharacter.thumbnail}
                description={props.selectedCharacter.description} 
                /> */}
            <div>
                
                <img src={favoritePoster.thumbnail.path + '.' + favoritePoster.thumbnail.extension}
                    alt="Marvel commic posters"
                    style={{ height: "300px" }} />
                <h3>{favoritePoster.name}</h3>
                <p>{favoritePoster.description}</p>
                <button >Delete Favorite</button>
            </div>
        </div>
    )


}
export default Favorite
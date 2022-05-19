import { useState } from 'react'

function Favorite(props) {
    const [favoritePoster, setFavoritePoster] = useState("")

    let myFavorites = props.favorites.map((character, index) => {
        return (
            <div>
                <img key={index} onClick={() => handlePosterClick(character)}
                    src={character.thumbnail.path + '.' + character.thumbnail.extension}
                    alt="Marvel commic posters"
                    style={{ height: "100px" }} />
            </div>
        )
    })

    const handlePosterClick = (character) => {
        setFavoritePoster(character)
    }

    const handleRemoveFavorite = (indexToRemove) => {

        let newTeam = props.favorites.filter((index) => {
            return index !== indexToRemove
        })

        props.setFavorites(newTeam)
        setFavoritePoster("")
    }



    let posterDisplayBig = "";
    if (favoritePoster.name) {

        posterDisplayBig = (
            <div>

                <img src={favoritePoster.thumbnail.path + '.' + favoritePoster.thumbnail.extension}
                    alt="Marvel commic posters"
                    style={{ height: "300px" }} />
                <h3>{favoritePoster.name}</h3>
                <p>{favoritePoster.description}</p>
                <button onClick={() => handleRemoveFavorite(favoritePoster)}>Delete Favorite</button>
            </div>
        )
    }



    return (
        <div>
            <h1>Your Favorite Characters</h1>
            <main className='homepage'>
            <div>{myFavorites}</div>
            <div>{posterDisplayBig}</div>
            </main>
        </div>
    )


}
export default Favorite
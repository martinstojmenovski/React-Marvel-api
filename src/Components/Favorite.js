import {useState} from 'react'


function Favorites(props) {
    // console.log(props.name)
    
const [posterDisplayBig, setPosterDisplayBig] = useState("")
    
const handleClick = (i) => {
    
    setPosterDisplayBig([...props.selectedCharacter, i])
    console.log(i)
}



    let myFavorites = props.favorites.map((character, index) => {
        // console.log(character.name) onClick={props.handlePosterClick}
        return (
            <div key={index}> 
                <img onClick={handleClick}
            src={character.thumbnail.path + '.' + character.thumbnail.extension}
            alt="Marvel commic posters"
            style={{ height: "100px" }} />
        </div>
        )
    })

   

    return (
        <div>
        <h1> This is Favorite Marvels</h1>
        <div>{myFavorites}</div>
    </div>
    )

    
}
export default Favorites
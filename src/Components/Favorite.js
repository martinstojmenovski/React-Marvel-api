function Favorite(props) {
    console.log(props)

    let myFavorite = props.favorite.map((character, index) => {
        return (
            <div>
            {/* <img src={props.pic.path + '.' + props.pic.extension}
            alt="Marvel commic posters"
            style={{ height: "300px" }} /> */}
        <h3>{character.data.results[0].name}</h3>
        {/* <p>{character.description}</p> */}
        </div>
        )
    })


    return (
        <div>
        <h1> This is Favorite Marvels</h1>
        <div>{myFavorite}</div>
    </div>
    )

    
}
export default Favorite
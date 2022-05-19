

function SinglePoster(props) {

    let posterDisplayBig = "";
    if (props.name) {

        posterDisplayBig = (
            <div>
                <img src={props.pic.path + '.' + props.pic.extension}
                    alt="Marvel commic posters"
                    style={{ height: "300px" }} />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <button onClick={props.addToFavorites}>Add To Favorite</button>
            </div>
        )
    }

    return (
        <div>
            {posterDisplayBig}
        </div>
    )
}
export default SinglePoster
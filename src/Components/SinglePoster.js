
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
            </div>
        )
    }


    return (
        <div>
            <h2>Single poster</h2>
            {posterDisplayBig}
        </div>
    )


}
export default SinglePoster
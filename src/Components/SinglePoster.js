import { useState, useEffect } from 'react'


const publicKey = "44d2d43ba9be5678fb9c06aa57e4bdcb"
const hash = "90a26c67e0b21e7532c4e3439210f3ea"


function SinglePoster(props) {

    const [marvel, setMarverl] = useState("")


    useEffect(() => {
        fetch(`https://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=${publicKey}&hash=${hash}`)
            .then((res) => res.json())
            .then((data) => {
                setMarverl(data);
            });
    }, [props.name]);






    let posterDisplayBig = "";
    if (props.name) {

        posterDisplayBig = (
            <div>
                <img src={props.pic.path + '.' + props.pic.extension}
                    alt="Marvel commic posters"
                    style={{ height: "300px" }} />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <button onClick={() => props.myFavorite(marvel)}>Add To Favorite</button>
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